// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render, screen } from "@testing-library/react";
import { stubBrowserApis } from "@/test/dom";

function throwingStorage(): Storage {
  const fail = () => {
    throw new DOMException("Access denied", "SecurityError");
  };
  return {
    length: 0,
    clear: fail,
    getItem: fail,
    key: fail,
    removeItem: fail,
    setItem: fail,
  };
}

// Le thème est lu au chargement du module : on le réimporte après avoir
// installé le stockage voulu.
async function loadThemeModule() {
  vi.resetModules();
  return import("./ThemeProvider");
}

beforeEach(() => {
  stubBrowserApis();
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.documentElement.classList.remove("dark");
});

describe("ThemeProvider", () => {
  it("survit à un localStorage qui lève et retombe sur le thème clair", async () => {
    vi.stubGlobal("localStorage", throwingStorage());
    const { ThemeProvider, useTheme } = await loadThemeModule();

    function Probe() {
      const { theme, toggleTheme } = useTheme();
      return (
        <button type="button" onClick={toggleTheme}>
          {theme}
        </button>
      );
    }

    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );

    const button = screen.getByRole("button");
    expect(button.textContent).toBe("light");

    // L'écriture lève aussi : le basculement doit quand même fonctionner.
    act(() => button.click());
    expect(button.textContent).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("ignore une valeur stockée invalide", async () => {
    const storage = {
      getItem: vi.fn(() => "purple"),
      setItem: vi.fn(),
    };
    vi.stubGlobal("localStorage", storage);
    const { ThemeProvider, useTheme } = await loadThemeModule();

    function Probe() {
      return <span>{useTheme().theme}</span>;
    }

    render(
      <ThemeProvider>
        <Probe />
      </ThemeProvider>,
    );

    expect(screen.getByText("light")).toBeTruthy();
    expect(storage.setItem).toHaveBeenCalledWith("theme", "light");
  });
});

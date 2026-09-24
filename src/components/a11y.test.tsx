// @vitest-environment jsdom
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { stubBrowserApis } from "@/test/dom";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { TopBanner } from "@/components/layout/TopBanner";
import { Navbar } from "@/components/layout/Navbar";

// Les projets actuels n'ont ni liveUrl ni githubUrl : on en ajoute pour que
// les icônes de lien externe soient rendues et vérifiées.
vi.mock("@/data/content", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/data/content")>();
  return {
    ...actual,
    projects: actual.projects.map((project) => ({
      ...project,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/example",
    })),
  };
});

beforeAll(() => {
  stubBrowserApis();
});

afterEach(() => {
  cleanup();
});

describe("icônes décoratives", () => {
  it.each([
    ["Hero", Hero],
    ["Skills", Skills],
    ["Contact", Contact],
    ["Projects", Projects],
    ["Testimonials", Testimonials],
    ["TopBanner", TopBanner],
    ["Navbar", Navbar],
  ])("%s : chaque svg est masqué aux technologies d'assistance", (_, Component) => {
    const { container } = render(<Component />);
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(0);
    svgs.forEach((svg) => {
      expect(svg.getAttribute("aria-hidden")).toBe("true");
    });
  });

  it("le lien chevron du Hero a un nom accessible", () => {
    render(<Hero />);
    const link = screen.getByRole("link", {
      name: "Défiler vers la section À propos",
    });
    expect(link.getAttribute("href")).toBe("#about");
  });
});

describe("Navbar", () => {
  it("le bouton menu expose aria-expanded et bascule à chaque clic", () => {
    render(<Navbar />);
    const button = screen.getByRole("button", { name: "Menu" });

    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(button.hasAttribute("aria-controls")).toBe(false);

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    const controls = button.getAttribute("aria-controls");
    expect(controls).toBe("mobile-menu");
    expect(document.getElementById(controls!)).not.toBeNull();

    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(document.getElementById("mobile-menu")).toBeNull();
  });
});

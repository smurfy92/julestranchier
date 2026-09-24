"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

let currentTheme: Theme = "light";
const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setTheme(next: Theme) {
  currentTheme = next;
  listeners.forEach((l) => l());
}

function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

// localStorage peut lever (navigation privée stricte, stockage bloqué) :
// on retombe alors sur la préférence système, sans casser le module.
function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem("theme");
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme: Theme) {
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Stockage indisponible : le thème reste valable pour la session en cours.
  }
}

// Initialize from localStorage on module load (client only)
if (typeof window !== "undefined") {
  const stored = readStoredTheme();
  if (stored) {
    currentTheme = stored;
  } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    currentTheme = "dark";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    writeStoredTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* reducedMotion="user" : Framer Motion coupe les animations de
          transformation quand l'OS demande moins de mouvement. */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  );
}

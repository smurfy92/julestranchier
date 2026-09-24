import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    // Environnement node par défaut ; les tests de composants déclarent
    // `// @vitest-environment jsdom` en tête de fichier.
    environment: "node",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});

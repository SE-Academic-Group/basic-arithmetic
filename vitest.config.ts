// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ["src"],
      exclude: ["src/{main,App}.tsx"],
    },
  },
});

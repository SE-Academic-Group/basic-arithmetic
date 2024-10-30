import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ["src"],
      exclude: ["src/{main,App}.tsx", "src/**/*.d.ts"],
    },
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
  },
});

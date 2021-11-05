// @ts-check
import { defineConfig } from "vite";
import dts from "vite-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      output: {
        sourcemapExcludeSources: true,
      },
    },
    minify: false,
    sourcemap: true,
    target: "esnext",
  },
  plugins: [dts()],
});

import { defineConfig } from "vitest/config";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240,
      deleteOriginFile: false,
    }),
    viteStaticCopy({
      targets: [
        {
          src: "robots.txt",
          dest: "",
        },
      ],
    }),
    Inspect(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.tsx",
    // alias: {
    //   "styled-components": "/__mocks__/styled-components.tsx",
    // },
    coverage: {
      provider: "istanbul",
      all: true,
      reportsDirectory: "./coverage",
    },
  },
});

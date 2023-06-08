import { fileURLToPath, URL } from 'node:url'
import { configDefaults, defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    globals: true,
    environment: "jsdom",
      exclude: [...configDefaults.exclude, '**/e2e/**']
  },
   root: ".", //Define the root
});
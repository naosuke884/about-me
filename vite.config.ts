import path from "path";
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [remix()],
  resolve: {
    alias: {
      "@/": path.join(__dirname, "app/"),
    },
  },
});

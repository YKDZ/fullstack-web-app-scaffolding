import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import { telefunc } from "telefunc/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  plugins: [
    UnoCSS(),
    vike(),
    telefunc(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],

  build: {
    target: "es2022",
  },
});

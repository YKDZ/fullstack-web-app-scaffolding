import type { Config } from "vike/types";
import vikeVue from "vike-vue/config";
import vikeServer from "vike-server/config";

export default {
  title: "Scaffolding",

  extends: [vikeVue, vikeServer],

  server: {
    entry: "src/server/index.ts",
  },

  filesystemRoutingRoot: "/"
} satisfies Config;

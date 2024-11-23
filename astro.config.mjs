// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://faizr206.github.io",
  base: "astroTes",
  integrations: [tailwind()],
});

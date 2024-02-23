// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "plugins"> = {
  presets: [sharedConfig],
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    require("tw-bootstrap-grid-optimizer"),
    require("@tailwindcss/typography"),
  ],
};

export default config;

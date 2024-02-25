// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  presets: [sharedConfig],
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;

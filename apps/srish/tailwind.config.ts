// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    colors: {
      cobalt: "#555691",
      "dark-cobalt": "#3B3C62",
      "light-cobalt": "#7D7EBE",
      "baby-cobalt": "#C4C5E0",
      peach: "#FFADAD",
      "baby-peach": "#FFD6D6",
      "dark-turquoise": "#65959C",
      "light-turquoise": "#9BD3DB",
      "baby-turquoise": "#D7EFF2",
      "dark-green": "#4FC1A6",
      "light-green": "#C1F0E5",
      "baby-green": "#84E1CB",
      "light-yellow": "#F2C94C",
      "baby-yellow": "#FFE9C2",
      black: "#000",
      white: "#fff",
      "burnt-gray": "#3A3535",
      "dark-gray": "#474747",
      gray: "#7B7B8F",
      "light-gray": "#CFCFDE",
      "baby-gray": "#F1F1F6",
      "baby-pink": "#FFF6F3",
      transparent: "transparent",
    },
  },
};

export default config;

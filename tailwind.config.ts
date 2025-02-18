import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        adSky: "#C3EBFA",
        adSkyLight: "#EDF9FD",
        adPurple: "#CFCEFF",
        adPurpleLight: "#F1F0FF",
        adYellow: "#FAE27C",
        adYellowLight: "#FEFCE8"
      },
    },
  },
  plugins: [],
} satisfies Config;

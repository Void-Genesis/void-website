import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "void-primary-black": "#0C0C0F",
        "void-blue": "#0E45EB",
        "void-orange": "#F68026",
        "void-white": "#F0F1F5",
        "void-white-300": "#D2D3D6",
        "void-grey-800": "#484D5C",
        "void-grey-300": "#202229",
        "void-grey-400": "#282B33",
        "void-grey-100": "#1A1C21",
        darkblue: {
          100: "#101114",
          200: "#040405",
        },
      },
    },
  },
  plugins: [],
};
export default config;

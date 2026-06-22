import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111413",
        graphite: "#4d5552",
        mist: "#f5f8f6",
        porcelain: "#fbfcfb",
        aurea: {
          mint: "#27c7a5",
          mintSoft: "#dff8f1",
          sage: "#9fb8ae",
          pearl: "#eef4f1",
          blush: "#f4ded8"
        }
      },
      boxShadow: {
        soft: "0 24px 70px rgba(17, 20, 19, 0.08)",
        card: "0 18px 45px rgba(17, 20, 19, 0.07)"
      },
      borderRadius: {
        clinic: "28px"
      }
    }
  },
  plugins: []
};

export default config;

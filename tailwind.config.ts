import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        '50': '#f8f7f4',
        '100': '#eeece6',
        '200': '#d3ccbc',
        '300': '#c7beaa',
        '400': '#b0a087',
        '500': '#a08b6f',
        '600': '#937c63',
        '700': '#7a6554',
        '800': '#645348',
        '900': '#52453c',
        '950': '#2b231f',
      },
      secondary: {
        '50': '#f5f8fa',
        '100': '#ebeff3',
        '200': '#d2dde5',
        '300': '#aac0cf',
        '400': '#7c9eb4',
        '500': '#5b839c',
        '600': '#486a83',
        '700': '#3b5569',
        '800': '#334959',
        '900': '#2e3e4c',
        '950': '#1f2832',
      },
      accent: {
        '50': '#f9f7f3',
        '100': '#f2ede2',
        '200': '#e4d9c4',
        '300': '#d2c09f',
        '400': '#bfa177',
        '500': '#b28b5d',
        '600': '#a57951',
        '700': '#896245',
        '800': '#70503c',
        '900': '#5b4233',
        '950': '#30221a',
      },
    }
  },
  plugins: [],
};
export default config;

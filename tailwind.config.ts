import type { Config } from "tailwindcss";
import { plugin, content } from "flowbite-react/tailwind";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      "teal-primary": "#008080",
      "gray-primary": "#2D2D2D",
      white: "#fffff",
    },
  },
  plugins: [plugin()],
} satisfies Config;

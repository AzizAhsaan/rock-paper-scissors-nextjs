import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'dark-text': 'hsl(229, 25%, 31%)',
  			'score-text': 'hsl(229, 64%, 46%)',
  			'header-outline': 'hsl(217, 16%, 45%)'
  		},
  		backgroundImage: {
  			'background-radial': 'radial-gradient(circle, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
  			'scissors-gradient': 'linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
  			'paper-gradient': 'linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
  			'rock-gradient': 'linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
  			'lizard-gradient': 'linear-gradient(to right, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
  			'cyan-gradient': 'linear-gradient(to right, hsl(189, 59%, 53%), hsl(189, 58%, 57%))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

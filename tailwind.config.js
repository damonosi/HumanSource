/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	important: "#root",

	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-madera)", ...fontFamily.sans],
			},
			boxShadow: {
				parteneriShadow: "inset 0px 0px 20px rgba(102, 102, 102, 0.1)",
			},
			backgroundImage: {
				"card-blog": "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), ",
			},
			dropShadow: {
				"card-hero": "5px 5px 20px rgba(0, 0, 0, 0.25);",
			},

			colors: {
				"rosu-brand": "#B82C2F",
				"rosu-butoane": "#B21E23",
				"rosu-icon": "#B21E23",
				"gri-brand": "#383A3C",
				"gri-bg": "#506673",
				"gri-deschis-bg": "#D0D0D0",
				"alb-site": "#FCFEFF",
			},
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
		},
	],
});

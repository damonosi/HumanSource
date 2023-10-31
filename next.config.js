/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ["backend.humansource.ro", "picsum.photos", "res.cloudinary.com"],
	},

	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},

			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ },
				use: [{ loader: "@svgr/webpack", options: { icon: true } }],
			},
		);
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	async redirects() {
		return [
			{
				source: "/blocks/react",
				destination: "/",
				permanent: true,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/ro",
			},
		];
	},
};

module.exports = nextConfig;

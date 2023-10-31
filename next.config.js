/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: ["backend.humansource.ro", "picsum.photos", "res.cloudinary.com"],
	},
	async headers() {
		return [
			{
				// Routes this applies to
				source: "/api/(.*)",
				// Headers
				headers: [
					// Allow for specific domains to have access or * for all
					{
						key: "Access-Control-Allow-Origin",
						value: process.env.ALLOWED_ORIGIN,
					},
					// Allows for specific methods accepted
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, POST, PUT, DELETE, OPTIONS",
					},
					// Allows for specific headers accepted (These are a few standard ones)
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type, Authorization",
					},
				],
			},
		];
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

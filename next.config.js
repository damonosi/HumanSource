/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "backend.humansource.ro",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "source.unsplash.com",
			},
		],
	},
	async headers() {
		return [
			{
				source: "/api/(.*)",

				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "backend.humansource.ro",
					},

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
};

module.exports = nextConfig;

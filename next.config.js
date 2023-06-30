/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		appDir: true,
		turbo: {
			loaders: {
				// Option format
				".md": [
					{
						loader: "@mdx-js/loader",
						options: {
							format: "md",
						},
					},
				],
				// Option-less format
				".mdx": ["@mdx-js/loader"],
			},
		},
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

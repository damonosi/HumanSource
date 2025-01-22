/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || `${process.env.NEXT_PUBLIC_SITE_URL}`,
	generateRobotsTxt: true, // (optional)
	// ...other options
};

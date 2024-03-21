const createNextIntlPlugin = require("next-intl/plugin");

// NOTE: Annoying that we have to use relative path here instead of package, maybe this will be fixed in the future, or I find a solution.
const withNextIntl = createNextIntlPlugin("../../packages/locale-intl/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: [],
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
};

module.exports = withNextIntl(nextConfig);

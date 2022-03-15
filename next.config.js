/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'components', 'utils'],
	},
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ['geist'],
	experimental: {
	  esmExternals: false // THIS IS THE FLAG THAT MATTERS
	},
  }
  
  module.exports = nextConfig
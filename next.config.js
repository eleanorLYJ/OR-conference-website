// next.config.js
// next.config.js
module.exports = {
	reactStrictMode: true,
	transpilePackages: ['geist'],
	experimental: {
	  esmExternals: false,
	},
	rewrites: async () => {
	  return [
		{
		  source: '/uploads/:path*',
		  destination: '/uploads/:path*',
		},
	  ];
	},
	// Optional: Configure public directory for static assets
	publicRuntimeConfig: {
	  uploadsPath: '/uploads',
	},
  };
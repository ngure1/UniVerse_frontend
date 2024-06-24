/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost", //change from localhost
				port: "8000",
				pathname: "/media/**",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1", //change from localhost
				port: "8000",
				pathname: "/media/**",
			},
		],
	},
};

export default nextConfig;

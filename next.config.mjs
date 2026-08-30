/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.weberzio.in",
        pathname: "/assets/uploads/**",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  eslint: {
    // This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/:path*.html",
        destination: "/:path*", // Map `.html` routes to actual routes without the extension
      },
    ];
  },
};

export default nextConfig;

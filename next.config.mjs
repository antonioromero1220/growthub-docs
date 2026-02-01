/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/favicon-1.png" }]
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build checks enabled for better code quality
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable image optimization for better performance
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'winacademy.mn',
      },
      {
        protocol: 'https',
        hostname: 'www.haneducation.mn',
      },
      {
        protocol: 'https',
        hostname: 'sunrisemongolia.com',
      },
      {
        protocol: 'https',
        hostname: 'images8.alphacoders.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
      {
        protocol: 'https',
        hostname: 'xp-hazel-eta.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fuln4-2.fna.fbcdn.net',
      },
    ],
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

export default nextConfig

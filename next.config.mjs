/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // SEO and Performance Optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Keep existing setting
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Security headers for SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ]
      },
      // SEO-friendly sitemap caching
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          },
          {
            key: 'Content-Type',
            value: 'application/xml'
          }
        ]
      },
      {
        source: '/sitemap-:path*.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          },
          {
            key: 'Content-Type',
            value: 'application/xml'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          },
          {
            key: 'Content-Type',
            value: 'text/plain'
          }
        ]
      }
    ]
  },

  // SEO redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      }
    ]
  },

  // Bundle optimization
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      }
    }
    return config
  },

  // Build optimization
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  
  // SEO settings
  trailingSlash: false,
  
  // Environment variables for SEO
  env: {
    SITE_URL: 'https://innovationsynergy.ai',
    SITE_NAME: 'Innovation Synergy AI Inc.',
    SITE_DESCRIPTION: 'AI infrastructure consulting for American small businesses',
  }
}

export default nextConfig

import { siteConfig } from '@/lib/metadata'

// Define static routes with their priorities and change frequencies
const staticRoutes = [
  {
    url: '',
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 1.0,
  },
  {
    url: '/ai-disclosure',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/privacy-policy',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/terms-of-service',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/cookie-policy',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: '/do-not-sell',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }
]

// Define service-related routes
const serviceRoutes = [
  {
    url: '/services/ai-consulting',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/voice-agents',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/business-automation',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/workflow-automation',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/services/data-enrichment',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/services/remote-installation',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }
]

// Define location-specific routes
const locationRoutes = [
  {
    url: '/boston',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/boston/ai-consulting',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/boston/voice-agents',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/nyc',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/nyc/ai-consulting',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/nyc/voice-agents',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/miami',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/miami/ai-consulting',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/miami/voice-agents',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }
]

// Industry-specific routes for better SEO targeting
const industryRoutes = [
  {
    url: '/industries/healthcare',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/industries/real-estate',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/industries/legal',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/industries/financial-services',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/industries/retail',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/industries/hospitality',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }
]

// Resource and content routes
const resourceRoutes = [
  {
    url: '/resources',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  },
  {
    url: '/resources/ai-roi-calculator',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/resources/implementation-guide',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/case-studies',
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  },
  {
    url: '/about',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: '/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }
]

export async function GET() {
  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...industryRoutes,
    ...resourceRoutes
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allRoutes
  .map((route) => {
    return `  <url>
    <loc>${siteConfig.url}${route.url}</loc>
    <lastmod>${route.lastModified.toISOString()}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  })
  .join('\n')}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  })
}

export const dynamic = 'force-static'
export const revalidate = 86400 // Revalidate every 24 hours
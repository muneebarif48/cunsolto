import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://consulto-app.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/terms-of-service'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

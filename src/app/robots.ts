import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site-meta";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/", "/dashboard/"],
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}

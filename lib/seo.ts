import type { Metadata } from "next";
import { siteConfig } from "./site";

export function buildMetadata({
  title,
  description,
  path
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} · ${siteConfig.name}`;
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: fullTitle,
      description: description ?? siteConfig.description,
      url,
      siteName: siteConfig.name,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description ?? siteConfig.description
    }
  };
}

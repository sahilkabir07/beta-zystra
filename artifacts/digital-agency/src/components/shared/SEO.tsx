import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  schema?: Record<string, any>;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  schema,
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper to find or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // Helper to find or create link tag
    const setLinkTag = (relValue: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${relValue}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", relValue);
        document.head.appendChild(element);
      }
      element.setAttribute("href", hrefValue);
    };

    // 2. Standard Meta Tags
    setMetaTag("name", "description", description);
    setLinkTag("canonical", canonicalUrl);

    // 3. Open Graph Tags
    setMetaTag("property", "og:title", ogTitle || title);
    setMetaTag("property", "og:description", ogDescription || description);
    setMetaTag("property", "og:url", canonicalUrl);
    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
    }
    if (ogImageAlt) {
      setMetaTag("property", "og:image:alt", ogImageAlt);
    }

    // 4. Twitter Card Tags
    setMetaTag("name", "twitter:title", ogTitle || title);
    setMetaTag("name", "twitter:description", ogDescription || description);
    if (ogImage) {
      setMetaTag("name", "twitter:image", ogImage);
    }

    // 5. Schema JSON-LD Script
    if (schema) {
      let scriptElement = document.getElementById("seo-schema-script") as HTMLScriptElement | null;
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "seo-schema-script";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema, null, 2);
    }

    return () => {
      // Cleanup script element on unmount to prevent duplicate schemas on route transitions
      const scriptElement = document.getElementById("seo-schema-script");
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [title, description, canonicalUrl, ogTitle, ogDescription, ogImage, ogImageAlt, schema]);

  return null;
}

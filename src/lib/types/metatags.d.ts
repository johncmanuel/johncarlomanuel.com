/**
 * Meta tags interfaces for SEO
 * I'm only keeping the necessary fields for this project.
 * See more options here and add them as needed:
 * Open Graph: https://ogp.me/
 * Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
 */

export interface MetaTags {
  title?: string;
  titleTemplate?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  twitter?: TwitterMetaTags;
  openGraph?: OpenGraphMetaTags;
}

export interface TwitterMetaTags {
  card?: "summary" | "summary_large_image" | "app" | "player";
  handle?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export interface OpenGraphMetaTags {
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
}

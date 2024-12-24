import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { getColorSchemePreference } from "../utils";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  children
}: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    googleVerification
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    googleVerification: googleVerification
  };

  const createThemedIconHref = (char: string = "ⓒ"): string => {
    const colorScheme = getColorSchemePreference();
    return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90' fill='${
      colorScheme === "dark" ? "white" : "black"
    }'>${char}</text></svg>`;
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="google-site-verification" content={seo.googleVerification} />
      <link rel="icon" href={createThemedIconHref("ⓒ")} />
      {children}
    </>
  );
};

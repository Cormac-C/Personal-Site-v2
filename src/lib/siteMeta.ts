export const siteMeta = {
  siteUrl: "https://cormaccureton.com",
  title: "Cormac Cureton",
  description: "AI Researcher & Engineer. Personal site and portfolio.",
  image: "/assets/face.jpg",
  googleVerification: "JXDBhz7fjKEE2NLgIWp7yKitnjmTtKsEDRbOfc9jL7M",
  twitterHandle: "@Cormac_WC"
} as const;

export type SiteMeta = typeof siteMeta;

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string; // path or absolute
  pathname?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  type?: "website" | "article";
}

export function buildSeo(meta: typeof siteMeta, props: SeoProps) {
  const url = props.pathname
    ? new URL(props.pathname, meta.siteUrl).toString()
    : meta.siteUrl;
  const image = props.image
    ? props.image.startsWith("http")
      ? props.image
      : new URL(props.image, meta.siteUrl).toString()
    : new URL(meta.image, meta.siteUrl).toString();
  return {
    title: props.title ? `${props.title}` : meta.title,
    description: props.description || meta.description,
    url,
    image,
    noIndex: props.noIndex || false,
    type: props.type || "website",
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime
  };
}

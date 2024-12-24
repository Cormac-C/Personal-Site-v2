import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = (): any => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          image
          googleVerification
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

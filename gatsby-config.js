module.exports = {
  siteMetadata: {
    siteUrl: "https://cormaccureton.gatsbyjs.io/",
    title: "Personal-Website-v2",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-9Y2ZJEF8PP",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
    },
    "gatsby-plugin-mdx",
  ],
};

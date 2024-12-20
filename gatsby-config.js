module.exports = {
  siteMetadata: {
    siteUrl: "https://cormaccureton.com",
    title: "Personal-Website-v2",
    description: "Cormac Cureton's Portfolio Website"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects`
      }
    },
    "gatsby-plugin-mdx"
  ]
};

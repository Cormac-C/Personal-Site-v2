module.exports = {
  siteMetadata: {
    siteUrl: "https://cormaccureton.com",
    title: "Cormac Cureton",
    description: "Cormac Cureton's Portfolio Website",
    image: "./src/images/face.jpg",
    googleVerification: "JXDBhz7fjKEE2NLgIWp7yKitnjmTtKsEDRbOfc9jL7M"
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

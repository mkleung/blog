/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    siteUrl: `https://www.mikeleung.ca`,
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}

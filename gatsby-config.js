/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: `https://www.mikeleung.ca`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}

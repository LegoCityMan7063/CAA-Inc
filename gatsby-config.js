module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `Canada Academy of Arts`,
    description: `Official website of Canada Academy of Arts Inc.`,
    author: `Glenn Ye`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `canada-academy-of-arts`,
        short_name: `caa`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/c.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-source-mongodb',
      options: {
        dbName: 'gallery',
        collection: 'artworks',
        server: {
            address: 'canada-academy-of-arts-shard-00-00.ksnji.mongodb.net',
            port: 27017
        },
        auth: {
            user: 'SirFudgekins',
            password: 'qpsyFYT3OAeblqD0'
        },
        extraParams: {
            replicaSet: 'atlas-rq5q8y-shard-0',
            ssl: true,
            authSource: 'admin',
            retryWrites: true
        }
      }
    },
  ],
  pathPrefix: "/Canada-Academy-of-Arts",
};
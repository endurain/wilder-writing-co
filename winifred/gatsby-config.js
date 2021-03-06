module.exports = {
  siteMetadata: {
    title: `Wilder Writing Co.`,
    description: `site description here`,
    author: `Kelsey Gray`,
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
    `gatsby-transformer-sharp`,
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wilder Writing Co.`,
        short_name: `Wilider`,
        start_url: `/`,
        background_color: `#f9f2ee`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wilder_writing_co_logo_winnie.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `http://wilderwp:8888/`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
        includedRoutes: [
          "**/categories",
          "**/posts",
        ],
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

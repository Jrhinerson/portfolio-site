/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve:'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/Logo.png"
      }
    },
    "gatsby-plugin-postcss"]
};
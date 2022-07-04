require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `gatsby-Twitter_API`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://rssbox.herokuapp.com/twitter/310157957/matos2802?include_rts=0&exclude_replies=1`,
        name: `GatsbyTwitterRss`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        // parserOption: {
        //   customFields: {
        //     item: ['itunes:duration']
        //   }
        // }
      },
    },
  ],
};

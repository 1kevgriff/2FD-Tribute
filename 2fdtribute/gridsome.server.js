// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

let fs = require('fs').promises;
let Parser = require('rss-parser');
let parser = new Parser();

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    let fileName = "./src/assets/rss/podcast.rss";

    let fileData = await fs.readFile(fileName);

    let feed = await parser.parseString(fileData);
    const rssFeed = actions.addCollection('rss_feed');

    feed.items.forEach(item => {
      rssFeed.addNode(item);
    });
  })

  api.createPages(async ({ createPage, graphql }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`query {
        allRssFeed {
          edges {
            node {
              id
              title
              content
              content_encoded
              link
              pubDate
              enclosure {
                url
                length
                type
              }
            }
          }
        }
      }`);

    data.allRssFeed.edges.forEach(({ node }) => {
      var newPath = node.link.replace('https://2frugaldudes.com', '');
      newPath = newPath.substring(0, newPath.length - 1);

      createPage({
        path: newPath,
        component: './src/templates/Episode.vue',
        context: node
      });
    })
  })
}

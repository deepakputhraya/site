// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs');
const yaml = require('js-yaml');

const articles = yaml.load(fs.readFileSync('./_data/articles.yml', 'utf8'));
const categories = yaml.load(fs.readFileSync('./_data/categories.yml', 'utf8'));
const drawings = yaml.load(fs.readFileSync('./_data/drawings.yml', 'utf8'));
const people = yaml.load(fs.readFileSync('./_data/people.yml', 'utf8'));

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    const collection = actions.addCollection({
      typeName: 'Drawings'
    })

    for (const drawing of drawings) {
      collection.addNode(drawing);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const { data } = await axios.get(process.env.GITHUB_API_URL);
    const collection = actions.addCollection({
      typeName: "Repos",
    });

    for (const item of data) {
      collection.addNode({
        name: item.name,
        description: item.description,
        homepage: item.homepage,
        html_url: item.html_url,
        language: item.language,
        updated_at: item.updated_at,
      });
    }
  });
};

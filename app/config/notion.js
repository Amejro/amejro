const { Client } = require("@notionhq/client");
// const { NOTION_TOKEN } = process.env;
// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export { notion };

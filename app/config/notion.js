const { Client } = require("@notionhq/client");
const { NOTION_TOKEN } = process.env;
// Initializing a client
const notion = new Client({
  auth: NOTION_TOKEN,
});

export { notion };

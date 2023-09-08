import { NextResponse } from "next/server";
// const { Client } = require("@notionhq/client");
// const { NOTION_TOKEN, CATEGORY_DB } = process.env;
// // Initializing a client
// const notion = new Client({
//   auth: NOTION_TOKEN,
// });

import { notion } from "app/config/notion";
const { CATEGORY_DB } = process.env;

export async function GET(req, res) {
  NextResponse;
  const response = await notion.databases.query({
    database_id: CATEGORY_DB,
    filter: {
      property: "Status",
      select: {
        equals: "Categories",
      },
    },
  });

  return NextResponse.json({ response });
}

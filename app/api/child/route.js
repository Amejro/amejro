import { NextResponse } from "next/server";
// const { Client } = require("@notionhq/client");
// const { NOTION_TOKEN, NOTION_DB } = process.env;
// // Initializing a client
// const notion = new Client({
//   auth: NOTION_TOKEN,
// });

import { notion } from "app/config/notion";
const { NOTION_DB } = process.env;

export async function GET(req, res) {
  NextResponse;
  const response = await notion.databases.query({
    database_id: NOTION_DB,
    filter: {
      and: [
        {
          property: "Status",
          select: {
            equals: "Live",
          },
        },
        {
          property: "child",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });

  return NextResponse.json({ response });
}

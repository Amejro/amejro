import { NextResponse } from "next/server";
// const { Client } = require("@notionhq/client");
// const { NOTION_TOKEN, NOTION_DB } = process.env;
// // Initializing a client
// const notion = new Client({
//   auth: NOTION_TOKEN,
// });

export async function GET(req, { params }) {
  console.log(params.name);
  NextResponse;
  //   const catName = req.url.splite("category/")[1];

  //   const response = await notion.databases.query({
  //     database_id: NOTION_DB,
  //     filter: {
  //       and: [
  //         {
  //           property: "Status",
  //           select: {
  //             equals: "Live",
  //           },
  //         },
  //         {
  //           property: "child",
  //           checkbox: {
  //             equals: true,
  //           },
  //         },
  //       ],
  //     },
  //   });

  return NextResponse.json(params.name);
}

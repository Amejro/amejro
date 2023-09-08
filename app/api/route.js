import { NextResponse } from "next/server";
import { notion } from "app/config/notion";
const { NOTION_DB } = process.env;

export async function GET(req, res) {
  NextResponse;
  const response = await notion.databases.query({
    database_id: NOTION_DB,
    filter: {
      property: "Status",
      select: {
        equals: "Live",
      },
    },
  });

  return NextResponse.json({ response });
}

import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";
import { notion } from "../config/notion";
import { cache } from "react";
import Image from "next/image";

export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const postslug = searchParams.get("slug");

  const getPostBySlug = cache(async () => {
    try {
      return await notion.databases.query({
        database_id: process.env.NOTION_DB,
        filter: {
          and: [
            {
              property: "Status",
              select: {
                equals: "Live",
              },
            },
            {
              property: "slug",
              rich_text: {
                equals: `${postslug}`,
              },
            },
          ],
        },
      });
    } catch (e) {
      return [];
    }
  });
  const data = await getPostBySlug();
  // console.log(data.results[0].properties.title.rich_text[0].text.content);

  //   const font = fetch(
  //     new URL("../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url)
  //   ).then((res) => res.arrayBuffer());
  //   const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 600,
          textAlign: "left",
          padding: 70,
          color: "red",
          backgroundImage: "linear-gradient(to right, #334d50, #cbcaa5)",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              height: "100vh",
              width: "100vw",
            }}
            src={data.results[0].properties.image.files[0]?.file.url}
            alt={data.results[0].properties.title.rich_text[0].text.content}
          />
        </div>
      </div>
    ),
    {
      //   width: 1920,
      //   height: 1080,
      // fonts: [
      //   {
      //     name: "Kaisei Tokumin",
      //     data: fontData,
      //     style: "normal",
      //   },
      // ],
    }
  );
}

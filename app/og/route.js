import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const imageURL = searchParams.get("url");

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
            src={imageURL}
            alt={"post image"}
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

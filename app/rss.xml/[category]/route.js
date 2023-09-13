import { useNotion } from "@/app/hooks/notion_hooks";
import RSS from "rss";
export async function GET(request, { params }) {
  const { getPostByCategory } = useNotion(); // eslint-disable-line

  const postResult = await getPostByCategory(params?.category);

  const allCategoryPost = await postResult.results;

  const feed = new RSS({
    title: `Get latest ${params?.category} news`,
    description: `Provide latest ${params?.category} news across the glob`,
    feed_url: `https://amejro.xyz/rss.xml/${params?.category}`,
    site_url: `https://amejro.xyz`,
    copyright: `copyright &copy; ${new Date().getFullYear()} Amejro. All rights reserved`,
    // image_url: properties.image.files[0]?.file.url,
    language: "en",
    categories: [],
    pubDate: new Date().toISOString(),
    hub: "",
    webMaster: "Amedzro Emmanuel",
    managingEditor: "Amedzro Emmanuel",
  });

  allCategoryPost.map((post) => {
    feed.item({
      title: post.properties.title.rich_text[0].plain_text,
      description: post.properties.description.rich_text[0].plain_text,
      guid: post.properties.image.files[0]?.file.url,
      url: `https://amejro.xyz/category/${post.properties.category.select.name}/article/${post.properties.slug.rich_text[0].plain_text}`,
      categories: [post.properties.category.select.name],
      author: "Amedzro Emmanuel",
      date: post.properties.publishedAt.created_time,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf=8",
    },
  });
}

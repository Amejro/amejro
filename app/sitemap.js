import { useNotion } from "./hooks/notion_hooks";
export const revalidate = 600;
export default async function sitemap() {
  const { getAll, getCategories } = useNotion(); // eslint-disable-line
  const result = await getAll();
  const allPosts = await result.results;

  const categorydata = await getCategories();
  const categories = await categorydata.results;

  const posts = allPosts.map((post) => ({
    url: `https://amejro.xyz/blog/${post.properties.slug.rich_text[0].plain_text}`,
    lastModified: post.publishedAt,
  }));

  const allCategory = categories.map((post) => ({
    url: `https://amejro.xyz//category/${category.properties.Name.title[0].plain_text}/article/${post.properties.slug.rich_text[0].plain_text}`,
    lastModified: post.publishedAt,
  }));

  const routes = [
    "",
    "/about",
    "./blog",
    "./category",
    "/terms-of-service",
    "/privacy_policy",
  ].map((route) => ({
    url: `https://amejro.xyz${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts, ...allCategory];
}

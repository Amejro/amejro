import { useNotion } from "./hooks/notion_hooks";

// const { END_POINT, HOST_URL } = process.env;
export default async function sitemap() {
  const { getAll } = useNotion(); // eslint-disable-line
  const result = await getAll();
  const allPosts = await result.results;

  // const res = await fetch(`${END_POINT}`);
  // const data = await res.json();
  // const allPosts = await data.response.results;

  const posts = allPosts.map((post) => ({
    url: `https://amejro.xyz/blog/${post.properties.slug.rich_text[0].plain_text}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/about", "/terms-of-service", "/privacy_policy"].map(
    (route) => ({
      url: `https://amejro.xyz${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts];
}

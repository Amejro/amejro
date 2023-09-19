export default async function sitemap() {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/posts`, {
    next: { revalidate: 600 },
  });
  const data = await res.json();

  const catRes = await fetch(`${process.env.CMS_END_POINT}/api/categories`, {
    next: { revalidate: 600 },
  });
  const catData = await catRes.json();

  const allPost = data.docs.map((post) => ({
    url: `https://amejro.xyz/category/${post.category[0].category}/article/${post.slug}`,
    lastModified: post.createdAt,
  }));

  const allCategories = catData.docs.map((cat) => ({
    url: `https://amejro.xyz/category/${cat.category}`,
    lastModified: cat.createdAt,
  }));

  const routes = [
    "",
    "/about",
    "./category",
    "/terms-of-service",
    "/privacy_policy",
  ].map((route) => ({
    url: `https://amejro.xyz${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...allPost, ...allCategories];
}

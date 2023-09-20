import RSS from "rss";
export async function GET(request, { params }) {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/categories`, {
    next: { revalidate: 120 },
  });
  const data = await res.json();
  const categoryID = await data?.docs.find(
    (cat) => cat.category === params?.category
  );

  const Catres = await fetch(
    `${process.env.CMS_END_POINT}/api/categories/${categoryID.id}?depth=2`,
    { next: { revalidate: 120 } }
  );
  const Catdata = await Catres.json();

  const feed = new RSS({
    title: `Get latest ${params?.category} news`,
    description: `Provide latest ${params?.category} news across the glob`,
    feed_url: `https://amejro.xyz/rss.xml/${params?.category}`,
    site_url: `https://amejro.xyz`,
    copyright: `copyright &copy; ${new Date().getFullYear()} Amejro. All rights reserved`,
    // image_url: properties.image.files[0]?.file.url,s
    language: "en",
    categories: [],
    pubDate: new Date().toISOString(),
    hub: "",
    webMaster: "Amedzro Emmanuel",
    managingEditor: "Amedzro Emmanuel",
  });

  Catdata.posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      guid: post.Image.cloudinary.secure_url,
      url: `https://amejro.xyz/category/${post?.category[0].category}/article/${post?.slug}`,
      categories: [post.category[0].category],
      author: "Amedzro Emmanuel",
      date: post.createdAt,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf=8",
    },
  });
}

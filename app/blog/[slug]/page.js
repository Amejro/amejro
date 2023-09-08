import Image from "next/image";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const { END_POINT, HOST_URL } = process.env;
export async function generateMetadata({ params }) {
  const result = await fetch(`${END_POINT}`).then((res) => res.json());

  const posts = await result.response.results;
  const blog_post = await posts?.find(
    (post) => post.properties.slug.rich_text[0].plain_text === params?.slug
  );

  const { title, description, image, slug, category } = blog_post?.properties;

  return {
    title: title.rich_text[0]?.plain_text,
    description: description.rich_text[0]?.plain_text,
    category: category.select?.name,
    openGraph: {
      title: title.rich_text[0]?.plain_text,
      description: description.rich_text[0]?.plain_text,
      url: `${HOST_URL}/blog/${slug.rich_text[0].plain_text}`,
      siteName: "Amejro",
      // publishedTime: "2023-01-01T00:00:00.000Z",
      authors: ["Amedzro Emmanuel"],
      images: [
        {
          url: image.files[0]?.file.url,
          width: 800,
          height: 600,
        },
        {
          url: image.files[0]?.file.url,
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title.rich_text[0]?.plain_text,
      description: description.rich_text[0]?.plain_text,
      images: [
        {
          url: image.files[0]?.file.url,
          width: 800,
          height: 600,
        },
        {
          url: image.files[0]?.file.url,
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
    },
  };
}

async function page({ params }) {
  const result = await fetch(`${END_POINT}`).then((res) => res.json());

  const posts = await result.response.results;
  const blog_post = await posts?.find(
    (post) => post.properties.slug.rich_text[0].plain_text === params?.slug
  );

  return (
    <>
      <div className="mx-auto max-w-2xl px-6">
        {/* <h1 className="text-[#2F1C6A] mt-5 text-3xl leading-[120%] font-extrabold">{post.title}</h1> */}
        <div className="aspect-w-3 aspect-h-2 my-5">
          <img
            className="rounded-lg"
            alt={blog_post.properties.image.files[0]?.name}
            src={blog_post.properties.image.files[0]?.file.url}
            // fill
          />
        </div>

        {/* <h3>{post?.subtitle}</h3> */}
        <article
          className="prose prose-stone prose-heading:text-[#2F1C6A] prose-p:text-[#36344D]
    prose-p:font-[400px] prose-a:text-[#673DE6] prose-a:no-underline hover:prose-a:underline
    "
        >
          <ReactMarkdown>
            {blog_post?.properties.content.rich_text[0].plain_text}
          </ReactMarkdown>
        </article>
      </div>
      {/* <Related allPosts={allPosts}/> */}
    </>
  );
}

export default page;

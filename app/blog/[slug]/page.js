import SocialShare from "@/app/components/share/SocialShare";
import { useNotion } from "@/app/hooks/notion_hooks";
import Image from "next/image";
export const revalidate = 600;
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
export async function generateMetadata({ params }) {
  const { getPostBySlug } = useNotion(); // eslint-disable-line

  const postResult = await getPostBySlug(params?.slug);
  const blog_post = await postResult.results[0];

  // const result = await getAll();
  // const posts = await result.results;

  // const blog_post = await posts?.find(
  //   (post) => post.properties.slug.rich_text[0].plain_text === params?.slug
  // );

  const { title, description, image, slug, category } = blog_post?.properties;
  const ogImage = `${process.env.HOST_URL}/og?slug=${slug.rich_text[0].plain_text}`;

  // const ogImage = image
  //   ? `https://leerob.io${image}`
  //   : `https://leerob.io/og?title=${title}`;

  return {
    title: title.rich_text[0]?.plain_text,
    description: description.rich_text[0]?.plain_text,
    category: category.select?.name,
    openGraph: {
      title: title.rich_text[0]?.plain_text,
      description: description.rich_text[0]?.plain_text,
      url: `${process.env.HOST_URL}/blog/${slug.rich_text[0].plain_text}`,
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
          // url: image.files[0]?.file.url,
          url: ogImage,
          width: 800,
          height: 600,
        },
        {
          // url: image.files[0]?.file.url,
          url: ogImage,
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
    },
  };
}

async function page({ params }) {
  // const { getAll } = useNotion(); // eslint-disable-line
  // const result = await getAll();
  // const posts = await result.results;

  // const blog_post = await posts?.find(
  //   (post) => post.propertsies.slug.rich_text[0].plain_text === params?.slug
  // );

  const { getPostBySlug } = useNotion(); // eslint-disable-line

  const postResult = await getPostBySlug(params?.slug);
  const blog_post = await postResult.results[0];

  return (
    <>
      <div className="mx-auto max-w-2xl px-6">
        {/* <h1 className="text-[#2F1C6A] mt-5 text-3xl leading-[120%] font-extrabold">{post.title}</h1> */}
        <div className="aspect-w-3 aspect-h-2 my-5">
          <Image
            className="rounded-lg"
            alt={blog_post.properties.image.files[0]?.name}
            src={blog_post.properties.image.files[0]?.file.url}
            width={300}
            height={300}
            // fill
          />
        </div>
        <SocialShare
          urlLink={`${process.env.HOST_URL}/blog/${blog_post.properties.slug.rich_text[0].plain_text}`}
          Title={blog_post.properties.title.rich_text[0]?.plain_text}
        />
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

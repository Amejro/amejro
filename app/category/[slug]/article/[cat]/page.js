import CategoryCard from "@/app/components/cards/CategoryCard";
import RelatedCard from "@/app/components/cards/RelatedCard";
import SocialShare from "@/app/components/share/SocialShare";
import { useNotion } from "@/app/hooks/notion_hooks";
import Image from "next/image";
export const revalidate = 600;
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
export async function generateMetadata({ params }) {
  const { getAll } = useNotion(); // eslint-disable-line

  // const postResult = await getPostBySlug(params?.cat);
  // const blog_post = await postResult.results[0];

  const allRes = await getAll();
  const allPost = await allRes.results;

  const blog_post = await allPost.find(
    (post) => post.properties.slug.rich_text[0].plain_text === params?.cat
  );

  const { title, description, image, slug, category, publishedAt } =
    blog_post?.properties;
  const ogImage = `${process.env.HOST_URL}/og?cat=${slug.rich_text[0].plain_text}`;

  return {
    title: title.rich_text[0]?.plain_text,
    description: description.rich_text[0]?.plain_text,
    category: category.select?.name,
    openGraph: {
      title: title.rich_text[0]?.plain_text,
      description: description.rich_text[0]?.plain_text,
      url: `${process.env.HOST_URL}/article/${slug.rich_text[0].plain_text}`,
      siteName: "Amejro",
      publishedTime: publishedAt?.created_time,
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
          url: ogImage,
          width: 800,
          height: 600,
          alt: title.rich_text[0]?.plain_text,
        },
        {
          url: ogImage,
          width: 1800,
          height: 1600,
          alt: title.rich_text[0]?.plain_text,
        },
      ],
    },
  };
}

async function page({ params }) {
  const { getAll } = useNotion(); // eslint-disable-line

  const allRes = await getAll();
  const allPost = await allRes.results;

  const blog_post = await allPost.find(
    (post) => post.properties.slug.rich_text[0].plain_text === params?.cat
  );

  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pb-5">
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
        <p className="text-xs text-[#8e9299] text-right pr-5">
          <span>Published:</span>{" "}
          {blog_post?.properties.publishedAt.created_time.split("T")[0]}
        </p>
        <SocialShare
          urlLink={`${process.env.HOST_URL}/article/${blog_post.properties.slug.rich_text[0].plain_text}`}
          Title={blog_post?.properties.title.rich_text[0]?.plain_text}
        />
        <article
          className="pb-10 prose  prose-stone prose-heading:text-[#2F1C6A] prose-p:text-[#36344D]
    prose-p:font-[400px] prose-a:text-[#673DE6] prose-a:no-underline hover:prose-a:underline
    "
        >
          <ReactMarkdown>
            {blog_post?.properties.content.rich_text[0].plain_text}
          </ReactMarkdown>
        </article>
        <SocialShare
          urlLink={`${process.env.HOST_URL}/article/${blog_post.properties.slug.rich_text[0].plain_text}`}
          Title={blog_post.properties.title.rich_text[0]?.plain_text}
        />
      </div>

      <RelatedCard cat={blog_post?.properties.category.select?.name} />
    </>
  );
}

export default page;

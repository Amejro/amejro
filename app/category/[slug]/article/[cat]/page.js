import RelatedCard from "@/app/components/cards/RelatedCard";
import { serialize } from "@/app/components/serialize/NewRichTextParser";
import SocialShare from "@/app/components/share/SocialShare";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/posts`);
  const allPost = await res.json();

  const blog_post = await allPost.docs.find(
    (post) => post.slug === params?.cat
  );

  const { title, description, Image, slug, category, createdAt } = blog_post;
  const ogImage = `${process.env.HOST_URL}/og?url=${Image.cloudinary.secure_url}`;

  return {
    title: title,
    description: description,
    category: category[0].category,
    openGraph: {
      title: title,
      description: description,
      url: `${process.env.HOST_URL}/${category[0].category}/article/${slug}`,
      siteName: "Amejro",
      publishedTime: createdAt,
      authors: ["Amedzro Emmanuel"],
      images: [
        {
          url: Image.cloudinary.secure_url,
          width: 800,
          height: 600,
          alt: Image.cloudinary.original_filename,
        },
        {
          url: Image.cloudinary.secure_url,
          width: 1800,
          height: 1600,
          alt: Image.cloudinary.original_filename,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: title,
        },
        {
          url: ogImage,
          width: 1800,
          height: 1600,
          alt: title,
        },
      ],
    },
  };
}

async function page({ params }) {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/posts`, {
    next: { revalidate: 600 },
  });
  const data = await res.json();

  const blog_post = await data?.docs.find((post) => post.slug === params?.cat);
  const htmlContent = serialize(blog_post?.content);
  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pb-5">
        <div className="aspect-w-3 aspect-h-2 my-5">
          <Image
            className="rounded-lg"
            alt={blog_post?.title}
            src={blog_post?.Image?.url}
            width={300}
            height={300}
            // fill
          />
        </div>
        <p className="text-xs text-[#8e9299] text-right pr-5">
          <span>Published:</span> {blog_post?.updatedAt.split("T")[0]}
        </p>
        <SocialShare
          urlLink={`${process.env.HOST_URL}/blog/${blog_post?.slug}`}
          Title={blog_post?.title}
        />
        <article
          className="pb-10 prose  prose-stone prose-heading:text-[#2F1C6A] prose-p:text-[#36344D]
    prose-p:font-[400px] prose-a:text-[#673DE6] prose-a:no-underline hover:prose-a:underline
    "
        >
          <div>{htmlContent}</div>
        </article>
        <SocialShare
          urlLink={`${process.env.HOST_URL}/blog/${blog_post?.slug}`}
          Title={blog_post?.title}
        />
      </div>
      <RelatedCard cat={blog_post?.category[0].category} />
    </>
  );
}

export default page;

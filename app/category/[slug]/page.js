import { useNotion } from "@/app/hooks/notion_hooks";
import CategoryCard from "app/components/cards/CategoryCard";
import HeroCard from "app/components/cards/HeroCard";
import ListCard from "app/components/cards/ListCard";
import Link from "next/link";

export const revalidate = 600;

async function page({ params }) {
  const { getChild, getLatest, getOldPosts, getPostByCategory } = useNotion(); // eslint-disable-line
  // ................................Latest.....................
  const latestRes = await getLatest();
  const latestPost = await latestRes.results;
  // console.log(latestPost[0].properties.category.select?.name);

  // ................................getPostByCategory.....................
  const categoryRes = await getPostByCategory(params.slug);
  const categoryPost = await categoryRes.results;
  // console.log(categoryPost[0].properties.publishedAt.created_time);
  //  ..................................Child..........................

  const childRes = await getChild();
  const childPosts = await childRes.results;

  //  ..................................OldPosts..........................
  const oldpostsRes = await getOldPosts();
  const oldPosts = await oldpostsRes.results;

  // ...............................------................................
  // const cat = await fetch(`${process.env.END_POINT}/category/${params.slug}`, {
  //   next: { revalidate: 60 },
  // });
  return (
    <div className="h-full">
      <main className=" grid grid-cols-12 max-w-[1140px] lg:mx-auto gap-x-[32px] lg:gap-[32px]  ">
        <div className="flex flex-col items-center relative w-full col-span-12 ">
          <section className="grid grid-cols-12 w-full gap-x-[16px] lg:gap-[16px]">
            {/* 1 */}
            <div className="flex justify-between  items-center min-h-[72px] col-span-12 bg-[#fff] lg:bg-[#f6f8fc] px-4">
              <div className="flex flex-col">
                <h1 className="mb-[8px] text-xl font-semibold">
                  {params.slug} Discoveries
                </h1>

                <div>Date</div>
              </div>
              <div>hello</div>
            </div>
            {/* 2 */}
            <div className="col-span-12 lg:col-span-8  mb-5">
              <div className="col-span-12 flex flex-col rounded-b-[18px] lg:rounded-[18px] border-b border-[#e3e3e3] bg-[#fff] px-4">
                <div className="flex justify-between items-center py-[30px]     w-full ">
                  <div className="flex items-center lg:border-b lg:border-[#e3e3e3] w-full pb-3">
                    <h3 className="text-[#1867DC]  text-xl font-bold">
                      Top stories
                    </h3>
                  </div>
                </div>

                <div className="lg:flex lg:flex-row">
                  {categoryPost
                    ?.sort((a, b) => {
                      if (
                        new Date(a.properties.publishedAt.created_time) >
                        new Date(b.properties.publishedAt.created_time)
                      ) {
                        return -1;
                      }
                      return 1;
                    })
                    .slice(0, 1)
                    .map((latest) => (
                      <div key={latest.properties.title.id}>
                        <Link
                          href={`/blog/${latest.properties.slug.rich_text[0].plain_text}`}
                        >
                          <HeroCard data={latest} />
                        </Link>
                      </div>
                    ))}

                  <div className="lg:flex flex-col flex-grow lg:ml-4">
                    {categoryPost
                      ?.sort((a, b) => {
                        if (
                          new Date(a.properties.publishedAt.created_time) >
                          new Date(b.properties.publishedAt.created_time)
                        ) {
                          return -1;
                        }
                        return 1;
                      })
                      .slice(1, 4)
                      .map((post) => (
                        <div key={post.properties.title.id}>
                          <Link
                            href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                          >
                            <ListCard data={post} />
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                {/* old list */}
                <div className="border-t border-[#e3e3e3] py-5">
                  {categoryPost
                    ?.sort((a, b) => {
                      if (
                        new Date(a.properties.publishedAt.created_time) >
                        new Date(b.properties.publishedAt.created_time)
                      ) {
                        return -1;
                      }
                      return 1;
                    })
                    .slice(4)
                    .map((post) => (
                      <div key={post.properties.slug.rich_text[0].plain_text}>
                        <Link
                          href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                        >
                          <ListCard data={post} />
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="hidden lg:block lg:col-span-4">
              <CategoryCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default page;

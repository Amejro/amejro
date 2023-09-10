import { useNotion } from "@/app/hooks/notion_hooks";
import ListCard from "./ListCard";
import Link from "next/link";
async function RelatedCard({ cat }) {
  const { getPostByCategory } = useNotion();
  const categoryRes = await getPostByCategory(cat);
  const categoryPost = await categoryRes.results;
  return (
    <>
      <div className="max-w-[1140px] lg:mx-auto py-20">
        <div className="col-span-12 flex flex-col rounded-[18px] bg-[#fff] px-4">
          <div className="flex justify-between items-center py-[30px]  -mt-[8px] -mb-[8px] w-full ">
            <div className="flex items-center">
              <h3 className="text-[#1867DC] text-xl font-bold">Related</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-5">
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
              .slice(0, 4)
              .map((post) => (
                <div key={post.properties.title.id}>
                  <Link
                    href={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                  >
                    <ListCard data={post} />
                  </Link>
                  <hr />
                </div>
              ))}

            <div className="hidden lg:absolute z-50 w-[1px] top-0 left-[50%] bg-[#e3e3e3] cursor-default h-full text-[#ffffff]">
              .
            </div>
          </div>
          <div className="py-5">
            <Link href={`/category/${cat}`}>More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedCard;

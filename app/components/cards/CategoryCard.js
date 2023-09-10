import { useNotion } from "@/app/hooks/notion_hooks";
import ListCard from "./ListCard";
import Link from "next/link";

async function CategoryCard({ cat }) {
  const { getPostByCategory } = useNotion();
  const categoryRes = await getPostByCategory(cat);
  const categoryPost = await categoryRes.results;
  return (
    <div className="col-span-12 md:col-span-8 mb-5 ">
      <div className="col-span-12 flex flex-col rounded-[18px] bg-[#fff] px-4">
        <div className="flex justify-between items-center py-[30px]  -mt-[8px] -mb-[8px] w-full ">
          <div className="flex items-center">
            <h3 className="text-[#1867DC] text-xl font-bold">{cat}</h3>
          </div>
        </div>
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
            </div>
          ))}
        <div className="py-5">
          <Link href={`/category/${cat}`}>More</Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;

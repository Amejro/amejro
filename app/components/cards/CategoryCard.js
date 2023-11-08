import ListCard from "./ListCard";
import Link from "next/link";

async function CategoryCard({ cat }) {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/categories`, {
    next: { revalidate: 600 },
  });
  const data = await res?.json();
  const categoryID = await data?.docs?.find(
    (category) => category?.category === cat
  );

  const Catres = await fetch(
    `${process.env.CMS_END_POINT}/api/categories/${categoryID?.id}?depth=2`,
    { next: { revalidate: 600 } }
  );
  const Catdata = await Catres?.json();

  return (
    <div className="col-span-12 md:col-span-8 mb-5 w-full ">
      <div className="col-span-12 flex flex-col rounded-[18px] bg-[#fff] px-4">
        <div className="flex justify-between items-center py-[30px]  -mt-[8px] -mb-[8px] w-full ">
          <div className="flex items-center">
            <h3 className="text-[#1867DC] text-xl font-bold">{cat}</h3>
          </div>
        </div>
        {Catdata?.posts
          ?.sort((a, b) => {
            if (new Date(a?.createdAt) > new Date(b.createdAt)) {
              return -1;
            }
            return 1;
          })
          .slice(0, 4)
          .map((post) => (
            <div key={post.id}>
              <Link href={`/category/${cat}/article/${post.slug}`}>
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

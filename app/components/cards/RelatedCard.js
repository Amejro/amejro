import ListCard from "./ListCard";
import Link from "next/link";
async function RelatedCard({ cat }) {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/categories`, {
    next: { revalidate: 600 },
  });
  const data = await res.json();
  const categoryID = await data.docs.find(
    (category) => category.category === cat
  );

  const Catres = await fetch(
    `${process.env.CMS_END_POINT}/api/categories/${categoryID?.id}?depth=2`,
    { next: { revalidate: 600 } }
  );
  const Catdata = await Catres.json();

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
            {Catdata?.posts
              ?.sort((a, b) => {
                if (new Date(a.createdAt) > new Date(b.createdAt)) {
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

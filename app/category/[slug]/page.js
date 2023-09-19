import CategoryCard from "app/components/cards/CategoryCard";
import HeroCard from "app/components/cards/HeroCard";
import ListCard from "app/components/cards/ListCard";
import Link from "next/link";

async function page({ params }) {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/categories`, {
    next: { revalidate: 600 },
  });
  const data = await res.json();
  const categoryID = await data.docs.find(
    (cat) => cat.category === params?.slug
  );

  const Catres = await fetch(
    `${process.env.CMS_END_POINT}/api/categories/${categoryID?.id}?depth=2`,
    { next: { revalidate: 600 } }
  );
  const Catdata = await Catres.json();

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
                  {Catdata.posts
                    ?.sort((a, b) => {
                      if (new Date(a.createdAt) > new Date(b.createdAt)) {
                        return -1;
                      }
                      return 1;
                    })
                    .slice(0, 1)
                    .map((latest) => (
                      <div key={latest.id}>
                        <Link
                          href={`/category/${params.slug}/article/${latest.slug}`}
                        >
                          <HeroCard data={latest} />
                        </Link>
                      </div>
                    ))}

                  <div className="lg:flex flex-col flex-grow lg:ml-4">
                    {Catdata.posts
                      ?.sort((a, b) => {
                        if (new Date(a.createdAt) > new Date(b.createdAt)) {
                          return -1;
                        }
                        return 1;
                      })
                      .slice(1, 4)
                      .map((post) => (
                        <div key={post.id}>
                          <Link
                            href={`/category/${params.slug}/article/${post.slug}`}
                          >
                            <ListCard data={post} />
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                {/* old list */}
                <div className="border-t border-[#e3e3e3] py-5">
                  {Catdata.posts
                    ?.sort((a, b) => {
                      if (new Date(a.createdAt) > new Date(b.createdAt)) {
                        return -1;
                      }
                      return 1;
                    })
                    .slice(4)
                    .map((post) => (
                      <div key={post.id}>
                        <Link
                          href={`/category/${params.slug}/article/${post.slug}`}
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

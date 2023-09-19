import Link from "next/link";
import ListCard from "./components/cards/ListCard";
import CategoryCard from "./components/cards/CategoryCard";
import HeroCard from "./components/cards/HeroCard";

export const metadata = {
  description: "Read more.",
};

export default async function Home() {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/posts`, {
    next: { revalidate: 600 },
  });
  const data = await res.json();

  return (
    <div className="h-full">
      <main className=" grid grid-cols-12 max-w-[1140px] lg:mx-auto gap-x-[32px] lg:gap-[32px]  ">
        <div className="flex flex-col items-center relative w-full col-span-12 ">
          <section className="grid grid-cols-12 w-full gap-x-[16px] lg:gap-[16px]">
            {/* 1 */}
            <div className="flex justify-between  items-center min-h-[72px] col-span-12 bg-[#fff] lg:bg-[#f6f8fc] px-4">
              <div className="flex flex-col">
                <h1 className="mb-[8px] text-xl font-semibold"> Discover</h1>

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
                  {data.docs
                    ?.sort((a, b) => {
                      if (new Date(a.createdAt) > new Date(b.createdAt)) {
                        return -1;
                      }
                      return 1;
                    })
                    .slice(0, 1)
                    .map((latest) => (
                      <div key={latest.id}>
                        {/* <Link href={`/blog/${latest.slug}`}> */}
                        <Link
                          href={`/category/${latest.category[0].category}/article/${latest.slug}`}
                        >
                          <HeroCard data={latest} />
                        </Link>
                      </div>
                    ))}

                  <div className="lg:flex flex-col flex-grow lg:ml-4">
                    {data.docs
                      ?.sort((a, b) => {
                        if (new Date(a.createdAt) > new Date(b.createdAt)) {
                          return -1;
                        }
                        return 1;
                      })
                      .slice(1, 4)
                      .map((childPost) => (
                        <div key={childPost.id}>
                          <Link
                            href={`/category/${childPost.category[0].category}/article/${childPost.slug}`}
                          >
                            <ListCard data={childPost} />
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                {/* old list */}
                <div className="border-t border-[#e3e3e3] py-5">
                  {data.docs
                    ?.sort((a, b) => {
                      if (new Date(a.createdAt) > new Date(b.createdAt)) {
                        return -1;
                      }
                      return 1;
                    })
                    .slice(4)
                    .map((oldPost) => (
                      <div key={oldPost.id}>
                        <Link
                          href={`/category/${oldPost.category[0].category}/article/${oldPost.slug}`}
                        >
                          <ListCard data={oldPost} />
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
        <div className="flex flex-col items-center relative w-full col-span-12">
          <section className="grid lg:grid-cols-12 w-full gap-x-[16px] lg:gap-[16px]">
            <div className="lg:col-span-4">
              <CategoryCard cat={"Entertainment"} />
            </div>
            <div className="lg:col-span-4">
              <CategoryCard cat={"Business"} />
            </div>
            <div className="lg:col-span-4">
              <CategoryCard cat={"Politics"} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

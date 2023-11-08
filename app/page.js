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

  const month = new Date().getMonth();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthNames[0]);
  return (
    <div className="">
      <div>
        <section>
          <div className="flex justify-between  items-center min-h-[72px] lg:col-span-12 bg-[#fff] lg:bg-[#f6f8fc] px-4">
            <div className="flex flex-col">
              <h1 className="mb-[8px] text-xl font-semibold"> Discover</h1>

              <div>
                <span>Date:</span>
                <time>
                  {" "}
                  {new Date().getDay()} {monthNames[month]}
                  {new Date().getFullYear()}
                </time>
              </div>
            </div>
            <div>hello</div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-x-3 lg:px-4 mb-10">
          <div className="lg:col-span-8 flex flex-col rounded-b-[18px] lg:rounded-[18px] border-b border-[#e3e3e3] bg-[#fff] px-4">
            <div className="flex justify-between items-center py-[30px]     w-full ">
              <div className="flex items-center lg:border-b lg:border-[#e3e3e3] w-full pb-3">
                <h3 className="text-[#1867DC]  text-xl font-bold">
                  Top stories
                </h3>
              </div>
            </div>

            <div className=" lg:flex lg:flex-row">
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
                    <Link
                      href={`/category/${latest.category[0].category}/article/${latest.slug}`}
                    >
                      <HeroCard data={latest} />
                    </Link>
                  </div>
                ))}

              <ul className="divide-y  divide-gray-100 py-2 px-0 lg:px-4">
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
              </ul>
            </div>

            <ul className="divide-y  divide-gray-100 py-2 px-0 ">
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
            </ul>
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <CategoryCard />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 w-full gap-x-[16px] lg:gap-[16px] lg:px-4">
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
    </div>
  );
}

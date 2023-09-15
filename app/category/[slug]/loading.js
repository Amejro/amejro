import CardSkeleton from "@/app/components/skeletons/CardSkeleton";
import ListCardSkeleton from "@/app/components/skeletons/ListCardSkeleton";
import React from "react";

function loading() {
  return (
    <div>
      <div className="h-full">
        <main className=" grid grid-cols-12 max-w-[1140px] lg:mx-auto gap-x-[32px] lg:gap-[32px]  ">
          <div className="flex flex-col items-center relative w-full col-span-12 ">
            <section className="grid grid-cols-12 w-full gap-x-[16px] lg:gap-[16px]">
              {/* 1 */}
              <div className="flex justify-between  items-center min-h-[72px] col-span-12 bg-[#fff] lg:bg-[#f6f8fc] px-4">
                <div role="status" class="max-w-sm animate-pulse">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
                  <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-2.5"></div>

                  <span class="sr-only">Loading...</span>
                </div>

                <div role="status" class="max-w-sm animate-pulse">
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-4"></div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              {/* 2 */}
              <div className="col-span-12 lg:col-span-8  mb-5">
                <div className="col-span-12 flex flex-col rounded-b-[18px] lg:rounded-[18px] border-b border-[#e3e3e3] bg-[#fff] px-4">
                  <div className="flex justify-between items-center py-[30px]     w-full ">
                    <div className="flex items-center lg:border-b lg:border-[#e3e3e3] w-full pb-3">
                      <div role="status" class="max-w-sm animate-pulse">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-5 mb-4"></div>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:flex lg:flex-row">
                    <CardSkeleton />

                    <div className="lg:flex flex-col flex-grow lg:ml-4">
                      <ListCardSkeleton />
                    </div>
                  </div>
                  {/* old list */}
                  <div className="border-t border-[#e3e3e3] py-5">
                    <ListCardSkeleton />
                  </div>
                </div>
              </div>
              {/* 3 */}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default loading;

import Image from "next/image";
import React from "react";
export const revalidate = 600;
function ListCard({ data }) {
  return (
    // <div className=" ">
    //   <div className="customGrid py-2 ">
    //     <div className="flex flex-col justify-evenly">
    //       <h2 className=" leading-5 text-base font-semibold">{data?.title}</h2>

    //       <p className="text-xs text-[#8e9299] text-right pr-5">
    //         <span>publd</span> {data?.updatedAt?.split("T")[0]}
    //       </p>
    //     </div>
    //     <div className=" bg-slate-700   w-[116px] h-[100px] rounded-md">
    //       <Image
    //         className="w-full h-full bg-slate-400 rounded-md"
    //         alt={data?.title}
    //         src={data?.Image?.url}
    //         width={116}
    //         height={100}
    //       />
    //     </div>
    //   </div>
    // </div>

    <li class="flex py-4">
      <div class="mr-4 flex-1">
        <h2 class="text-base font-medium text-gray-900 line-clamp-2">
          {data?.title}
        </h2>
        <div class="mt-1 text-sm text-gray-400">
          <span>{data?.category[0]?.category}</span> •{" "}
          <time>{data?.updatedAt?.split("T")[0]}</time>
        </div>
      </div>
      <div>
        <Image
          className="h-20 w-20 rounded-lg object-cover"
          alt={data?.title}
          src={data?.Image?.url}
          width={80}
          height={80}
        />
      </div>
    </li>
  );
}

export default ListCard;

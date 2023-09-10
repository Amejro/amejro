import Image from "next/image";
import React from "react";
export const revalidate = 600;
function ListCard({ data }) {
  return (
    <div className=" ">
      <div className="customGrid py-2 ">
        <div className="flex flex-col justify-evenly">
          <h2 className=" leading-5 text-base font-semibold">
            {data?.properties.title.rich_text[0].plain_text}
          </h2>

          <p className="text-xs text-[#8e9299] text-right pr-5">
            <span>publd</span>{" "}
            {data?.properties.publishedAt.created_time.split("T")[0]}
          </p>
        </div>
        <div className=" bg-slate-700   w-[116px] h-[100px] rounded-md">
          <Image
            className="w-full h-full bg-slate-400 rounded-md"
            alt={data?.properties.image.files[0]?.name}
            src={data?.properties.image.files[0]?.file.url}
            width={116}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export default ListCard;

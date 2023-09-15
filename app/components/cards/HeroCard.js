import Image from "next/image";
import { Suspense } from "react";
import ImageSkeleton from "../skeletons/ImageSkeleton";
export const revalidate = 600;
import dynamic from "next/dynamic";

function HeroCard({ data }) {
  return (
    <div className="border-b lg:border-0  lg:w-[440px] border-[#e3e3e3]">
      {/* <Link href={"/"} className="block"> */}
      <div className="card card-compact w-full bg-base-100 ">
        <figure>
          <Image
            className="w-full h-[250px] bg-slate-400"
            alt={data.properties.image.files[0].name}
            src={data.properties.image.files[0].file.url}
            width={300}
            height={250}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {data?.properties.title.rich_text[0].plain_text}
          </h2>
          <p className="text-xs text-[#8e9299]">
            <span>publd</span>{" "}
            {data?.properties.publishedAt.created_time.split("T")[0]}
          </p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default HeroCard;

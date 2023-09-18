import Image from "next/image";

function HeroCard({ data }) {
  return (
    <div className="border-b lg:border-0  lg:w-[440px] border-[#e3e3e3]">
      {/* <Link href={"/"} className="block"> */}
      <div className="card card-compact w-full bg-base-100 ">
        <figure>
          <Image
            className="w-full h-[250px] bg-slate-400"
            alt={data?.title}
            src={data?.Image?.url}
            width={300}
            height={250}
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{data?.title}</h2>
          <p className="text-xs text-[#8e9299]">
            <span>publd</span> {data?.updatedAt?.split("T")[0]}
          </p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default HeroCard;

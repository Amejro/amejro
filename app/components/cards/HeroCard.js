import Link from "next/link";

function HeroCard({ data }) {
  return (
    <div className="border-b lg:border-0  lg:w-[440px] border-[#e3e3e3]">
      {/* <Link href={"/"} className="block"> */}
      <div className="card card-compact w-full bg-base-100 ">
        <figure>
          <img
            className="w-full h-[168px] bg-slate-400"
            src="https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data?.properties.title.rich_text[0].plain_text}
          </h2>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default HeroCard;

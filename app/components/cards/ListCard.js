import React from "react";

function ListCard({ data }) {
  return (
    <div className=" ">
      <div className="customGrid py-2 ">
        <div>
          <h2 className=" leading-5 text-base font-semibold">
            {data?.properties.title.rich_text[0].plain_text}
          </h2>
        </div>
        <div className=" bg-slate-700   w-[116px] h-[100px] rounded-md">
          <img
            className="w-full h-full bg-slate-400 rounded-md"
            src="https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt="Shoes"
          />
        </div>
      </div>
    </div>
  );
}

export default ListCard;

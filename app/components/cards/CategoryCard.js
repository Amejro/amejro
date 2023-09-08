import ListCard from "./ListCard";

function CategoryCard() {
  return (
    <div className="col-span-12 md:col-span-8 mb-5 ">
      <div className="col-span-12 flex flex-col rounded-[18px] bg-[#fff] px-4">
        <div className="flex justify-between items-center py-[30px]  -mt-[8px] -mb-[8px] w-full ">
          <div className="flex items-center">
            <h3 className="text-[#1867DC] text-xl font-bold">Technology</h3>
          </div>
        </div>
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
}

export default CategoryCard;

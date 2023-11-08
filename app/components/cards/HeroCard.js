import Image from "next/image";

function HeroCard({ data }) {
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
  const date = new Date(data?.updatedAt);
  const month = date.getMonth();
  return (
    <div class="relative mx-auto max-w-md lg:w-[440px] overflow-hidden rounded-lg bg-white shadow">
      <div>
        <figure>
          <Image
            className="w-full h-full bg-slate-400 object-cover"
            alt={data?.title}
            src={data?.Image?.url}
            width={300}
            height={250}
          />
        </figure>
      </div>
      <div class="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
      <div class="absolute inset-x-0 bottom-0 z-20 p-4">
        <p class="mb-1 text-sm text-white text-opacity-80">
          <time>
            {" "}
            {date.getDay()} {monthNames[month]} {date.getFullYear()}
          </time>
        </p>
        <h2 class="sm:text-xl text-sm font-medium text-white">{data?.title}</h2>
      </div>
    </div>
  );
}

export default HeroCard;

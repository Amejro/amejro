import Link from "next/link";
import Amejro from "./logo/Amejro";
import { useNotion } from "../hooks/notion_hooks";

async function NavBar() {
  // const categoryRes = await fetch(`${process.env.END_POINT}/categories`, {
  //   next: { revalidate: 60 },
  // });

  // // check if the response was successful
  // if (!categoryRes.ok) {
  //   throw new Error(`Server responded with status: ${categoryRes.status}`);
  // }

  // const categorydata = await categoryRes.json();
  // const categories = await categorydata.response.results;

  const { getCategories } = useNotion();
  const categorydata = await getCategories();
  const categories = await categorydata.results;

  return (
    <div>
      <div className="navbar bg-base-100">
        <nav className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {categories.map((category) => (
                <li key={category.properties.Status.id}>
                  <Link
                    href={`/category/${category.properties.Name.title[0].plain_text}`}
                  >
                    {category.properties.Name.title[0].plain_text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            <Amejro />
          </Link>
        </nav>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {categories.map((category) => (
              <li key={category.properties.Status.id}>
                <Link
                  href={`/category/${category.properties.Name.title[0].plain_text}`}
                >
                  {category.properties.Name.title[0].plain_text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

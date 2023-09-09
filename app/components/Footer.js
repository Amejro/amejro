import Link from "next/link";
import Amejro from "./logo/Amejro";
import { useNotion } from "../hooks/notion_hooks";

async function Footer() {
  // const categoryRes = await fetch(`${process.env.END_POINT}/categories`, {
  //   next: { revalidate: 60 },
  // });

  // // if (!categoryRes.ok) {
  // //   throw new Error(`Server responded with status: ${categoryRes.status}`);
  // // }

  // const categorydata = await categoryRes.json();
  // const categories = await categorydata.response.results;

  const { getCategories } = useNotion();
  const categorydata = await getCategories();
  const categories = await categorydata.results;
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Categories</header>
          {categories.map((category) => (
            <li key={category.properties.Status.id}>
              <Link
                href={`/category/${category.properties.Name.title[0].plain_text}`}
              >
                {category.properties.Name.title[0].plain_text}
              </Link>
            </li>
          ))}
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link href={"/about"} className="link link-hover">
            About us
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link href={"/terms-of-service"} className="link link-hover">
            Terms of service
          </Link>
          <Link href={"/privacy_policy"} className="link link-hover">
            Privacy policy
          </Link>
        </nav>
        <aside>
          <Amejro />
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;

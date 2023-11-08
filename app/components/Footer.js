import Link from "next/link";
import Amejro from "./logo/Amejro";
import { GithubIcon, TwitterIcon, YoutubeIcon } from "./logo/logos";
async function Footer() {
  const res = await fetch(`${process.env.CMS_END_POINT}/api/categories`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();

  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">Categories</header>
          {data.docs?.map((category) => (
            <li key={category?.id}>
              <Link href={`/category/${category?.category}`}>
                {category?.category}
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
        <nav>
          <address className="">
            <header className="footer-title">Address</header>
            P.O BOX 43 <br />
            PEKI-V/R, Ghana <br />
            <div className="space-y-3">
              <a className="block" href="mailto:amejro19@gmail.com">
                amejro19@gmail.com
              </a>

              <a className="block" href="tel:+2330533576521">
                (+233)0533576521 <br /> (+233)0205507559
              </a>
              <div className="flex space-x-7">
                <Link href={"https://github.com/Amejro"}>
                  <GithubIcon />
                </Link>{" "}
                <Link href={"https://twitter.com/Amejro12"}>
                  <TwitterIcon />
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/channel/UC4QK3FJ2PtCNhVTNBuES-kA"
                  }
                >
                  <YoutubeIcon />
                </Link>
              </div>
            </div>
          </address>
        </nav>

        <aside>
          <Amejro />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;

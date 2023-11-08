import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Amejro",
    template: "%s | Amejro",
  },
  description: "Read more",
  openGraph: {
    title: "Amejro",
    description: "Descover more",
    url: "https://amejro.xyz",
    siteName: "Amejro",

    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      // "max-snippet": -1,
    },
  },
  twitter: {
    title: "Amejro",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/icon.ico",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#f6f8fc]">
          <NavBar />
          <div>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

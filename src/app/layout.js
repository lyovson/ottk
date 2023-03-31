import { Oswald, Quintessential } from "next/font/google";

import Menu from "../components/Menu.jsx";
import BgImage from "./BgImage.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], variable: "--body-font" });

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--heading-font",
});

export const metadata = {
  title: "OTTK",
  description: "2023 crime-comedy movie by Serj Gabyan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
    ${oswald.variable} 
    ${quintessential.variable}`}
    >
      <body className=" bg-stone-900 ">
        <BgImage />
        <Header />
        <main className="mx-auto mt-10 flex flex-col place-items-center justify-between gap-10  overflow-hidden  font-body text-orange-100 lg:max-w-3xl xl:max-w-5xl">
          {children}

          <Menu active="Case" />
        </main>
      </body>
    </html>
  );
}

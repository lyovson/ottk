<<<<<<< HEAD
=======
import { Oswald, Quintessential } from "next/font/google";

import AnimatedDiv from "../components/AnimatedDiv.jsx";
import Menu from "../components/Menu.jsx";
import BgImage from "./BgImage.js";
import Header from "./Header.js";
>>>>>>> beta
import "./globals.css";

import { Oswald, Quintessential } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], variable: "--body-font" });

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--heading-font",
});

import BgImage from "./BgImage.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

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
<<<<<<< HEAD
        <main className=" container max-w-5xl mx-auto flex gap-10 flex-col  place-items-center text-orange-100  font-body">
          <Header />
          {children}
          <Footer />
=======
        <Header />
        <main className="mx-auto mt-10 flex flex-col  place-items-center justify-between gap-10 overflow-hidden  p-8 pb-36 font-body text-orange-100 lg:max-w-3xl lg:pb-8 xl:max-w-5xl">
          <AnimatedDiv>{children}</AnimatedDiv>
          <Menu active="Case" />
>>>>>>> beta
        </main>
      </body>
    </html>
  );
}

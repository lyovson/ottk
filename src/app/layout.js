import { Oswald, Quintessential } from "next/font/google";

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
      <body className="bg-stone-900">
        <BgImage />
        <main className=" container mx-auto flex max-w-5xl flex-col place-items-center  gap-10 font-body  text-orange-100">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

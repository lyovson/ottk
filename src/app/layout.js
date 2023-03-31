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
      <body className="bg-stone-900">
        <BgImage />
        <main className=" container max-w-5xl mx-auto flex gap-10 flex-col  place-items-center text-orange-100  font-body">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

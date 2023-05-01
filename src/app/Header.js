import Image from "next/image";

import Heading from "../components/Heading.jsx";

export default function Header() {
  return (
    <Heading
      layout
      className="sticky top-0 z-10 flex flex-col items-center justify-center gap-0 bg-stone-900 lg:flex-row lg:justify-center"
    >
      <Image
        src="/header-mobile.jpg"
        alt="OTTK Film Logo Mobile"
        width="1024"
        height="128"
        className=" block md:hidden "
      />
      <Image
        src="/header.jpg"
        alt="OTTK Film Logo"
        width="1024"
        height="128"
        className=" hidden md:block "
      />
      <h1 className="hidden">
        <span className="font-heading text-2xl text-orange-100">
          {"OTTK: Mulberry Moonshine"}
        </span>
      </h1>
    </Heading>
  );
}

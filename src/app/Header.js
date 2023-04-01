import Image from "next/image";

import Heading from "../components/Heading.jsx";

export default function Header() {
  return (
    <Heading
      layout
      className=" flex flex-col items-center justify-center gap-0 lg:flex-row lg:justify-center"
    >
      <Image
        src="/logo.png"
        alt="OTTK Film Logo"
        width="128"
        height="128"
        className="  "
      />
      <h1>
        <span className="font-heading text-2xl text-orange-100">
          {"OTTK: Mulberry Moonshine"}
        </span>
      </h1>
    </Heading>
  );
}

import Image from "next/image";

import Heading from "../components/Heading.jsx";

export default function Header() {
  return (
    <Heading className=" flex flex-col items-center justify-center gap-0 ">
      <Image
        src="/logo.png"
        alt="OTTK Film Logo"
        width="128"
        height="128"
        className=" mx-auto "
      />
      <h1>
        <span className="font-body text-2xl text-orange-100">
          {'OTTK: The Air, The Mulberry, and The Gun Handle"'}
        </span>
      </h1>
    </Heading>
  );
}

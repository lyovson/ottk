import Image from "next/image";

import Heading from "../components/Heading.jsx";
export default function Header() {
  return (
    <Heading className="mt-10 flex flex-col items-center justify-center ">
      <Image
        src="/logo.png"
        alt="OTTK Film Logo"
        width="300"
        height="300"
        className=" mx-auto -mt-12"
      />
      <h1 className=" -mt-10 mb-10">
        <span className="block text-2xl text-orange-100 font-body">
          {'"The Air, The Mulberry, and The Gun Handle"'}
        </span>
      </h1>
    </Heading>
  );
}

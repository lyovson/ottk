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
<<<<<<< HEAD
      <h1 className=" -mt-10 mb-10">
        <span className="block text-2xl text-orange-100 font-body">
          {'"The Air, The Mulberry, and The Gun Handle"'}
=======
      <h1>
        <span className="font-heading text-2xl text-orange-100">
          {"OTTK: Mulberry Moonshine"}
>>>>>>> beta
        </span>
      </h1>
    </Heading>
  );
}

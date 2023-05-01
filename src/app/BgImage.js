import Image from "next/image";

export default function bgImage() {
  return (
    <div className="fixed w-screen h-screen -z-10 overflow-hidden blur-sm">
      <Image
<<<<<<< HEAD
        className="grayscale blur-lg"
=======
        className="blur-lg "
>>>>>>> beta
        src="/images/cast.jpeg"
        fill="true"
        alt="OTTK"
      />
    </div>
  );
}

import Image from "next/image";

export default function bgImage() {
  return (
    <div className="fixed -z-10 h-screen w-screen overflow-hidden blur-sm">
      <Image
        className="blur-lg "
        src="/images/cast.jpeg"
        fill="true"
        alt="OTTK"
      />
    </div>
  );
}

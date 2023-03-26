import Image from "next/image";

export default function bgImage() {
  return (
    <div className="fixed w-screen h-screen -z-10 overflow-hidden blur-sm">
      <Image
        className="sepia blur-sm"
        src="/images/cast.jpeg"
        fill="true"
        alt="OTTK"
      />
    </div>
  );
}

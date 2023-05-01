import Image from "next/image";

export default function bgImage() {
  return (
    <div className="fixed -z-10 h-screen w-screen  overflow-hidden bg-[url('/images/bg-500.jpg')] bg-repeat">
      {/* <Image className="" src="/images/bg.jpg" fill="true" alt="OTTK" /> */}
    </div>
  );
}

"use client";

<<<<<<< HEAD
=======
import { motion } from "framer-motion";
import Image from "next/image";
>>>>>>> beta
import { useState } from "react";
import Image from "next/image";
import YouTube from "react-youtube";

import Heading from "../components/Heading";

export default function Trailer({ videoId }) {
  const [ready, setReady] = useState(false);

  return (
<<<<<<< HEAD
    <section className="flex flex-col gap-8 items-center w-full   max-w-5xl ">
      <Heading> Trailer: </Heading>
      <aside
        className={` block relative shadow-lg transition-all hover:translate-y-1 `}
      >
        <Image
          src={"/images/yt4.png"}
          fill="true"
          className={`aspect-video w-[100vw]  max-w-5xl transition-all delay-100  -z-10 ${
=======
    <motion.section className="flex w-full  flex-col items-center gap-8  ">
      <article className={` relative block w-full `}>
        <Image
          src={"/images/yt4.png"}
          fill="true"
          className={`-z-10 aspect-video  w-full  transition-all  delay-100 ${
>>>>>>> beta
            !ready ? "opacity-100 blur" : " opacity-0 "
          }`}
          alt="YouTube Video Thumbnail"
        />

        <YouTube
          onReady={() => setReady(() => true)}
          videoId={videoId}
<<<<<<< HEAD
          className={` mx-auto  
          }`}
          iframeClassName={`aspect-video w-[100vw]  max-w-5xl transition-all delay-100  ${
=======
          className={` }  
          mx-auto`}
          iframeClassName={`aspect-video w-full   transition-all delay-100  ${
>>>>>>> beta
            ready ? "opacity-100 h-full " : "opacity-0 h-fit blur-sm"
          }`}
        />
      </article>
    </motion.section>
  );
}

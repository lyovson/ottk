"use client";

import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";

import Heading from "../components/Heading";

export default function Trailer({ videoId }) {
  const [ready, setReady] = useState(false);

  return (
    <section className="flex w-full  flex-col items-center gap-8 ">
      <article className={` relative block w-full `}>
        <Image
          src={"/images/yt4.png"}
          fill="true"
          className={`-z-10 aspect-video  w-full  transition-all  delay-100 ${
            !ready ? "opacity-100 blur" : " opacity-0 "
          }`}
          alt="YouTube Video Thumbnail"
        />

        <YouTube
          onReady={() => setReady(() => true)}
          videoId={videoId}
          className={` }  
          mx-auto`}
          iframeClassName={`aspect-video w-full   transition-all delay-100  ${
            ready ? "opacity-100 h-full " : "opacity-0 h-fit blur-sm"
          }`}
        />
      </article>
    </section>
  );
}

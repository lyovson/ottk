"use client";

import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";

import Heading from "../components/Heading";

export default function Trailer({ videoId }) {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="flex w-full max-w-5xl flex-col items-center   gap-8 ">
      <Heading> Trailer: </Heading>
      <aside
        className={` relative block shadow-lg transition-all hover:translate-y-1 `}
      >
        <Image
          src={"/images/yt4.png"}
          fill="true"
          className={`-z-10 aspect-video  w-[100vw] max-w-5xl transition-all  delay-100 ${
            !ready ? "opacity-100 blur" : " opacity-0 "
          }`}
          alt="YouTube Video Thumbnail"
        />

        <YouTube
          onPlay={() => setPlaying(() => true)}
          onPause={() => setPlaying(() => false)}
          onReady={() => setReady(() => true)}
          videoId={videoId}
          className={` }  
          mx-auto`}
          iframeClassName={`aspect-video w-[100vw]  max-w-5xl transition-all delay-100  ${
            ready ? "opacity-100 h-full " : "opacity-0 h-fit blur-sm"
          }`}
        />
      </aside>
    </section>
  );
}

"use client";

import YouTube from "react-youtube";
import { useState } from "react";

import Image from "next/image";

import Heading from "./Heading";

const videoOptions = {
  width: "100%",
  height: "100%",
  playerVars: {
    autoplay: 1,
  },
};

export default function YT({ videoId }) {
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <section className="flex flex-col gap-8 items-center w-full   max-w-5xl ">
      <Heading> Trailer: </Heading>
      <aside
        className={` block relative shadow-lg transition-all hover:translate-y-1 sepia hover:filter-none focus:filter-none  ${
          !playing ? "sepia" : "filter-none"
        }`}
      >
        <Image
          src={"/images/yt3.png"}
          fill="true"
          className={`aspect-video w-[100vw] p-8 max-w-5xl transition-all delay-100  -z-10 ${
            !ready ? "opacity-100 blur-sm" : " opacity-0 "
          }`}
          alt="YouTube Video Thumbnail"
        />

        <YouTube
          onPlay={() => setPlaying(() => true)}
          onPause={() => setPlaying(() => false)}
          onReady={() => setReady(() => true)}
          videoId={videoId}
          className={` mx-auto  
          }`}
          iframeClassName={`aspect-video w-[100vw] p-8 max-w-5xl transition-all delay-100  ${
            ready ? "opacity-100 h-full " : "opacity-0 h-fit blur-sm"
          }`}
        />
      </aside>
    </section>
  );
}

{
  /* <Image
  onClick={onClick}
  loading="lazy"
  src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`}
  alt="YouTube Video Thumbnail"
  width={width}
  height={height}
  className="shadow"
/>; */
}
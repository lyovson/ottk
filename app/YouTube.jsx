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
    <section className="flex flex-col gap-8 items-center  max-w-5xl ">
      <Heading> Trailer: </Heading>
      <aside
        className={`block relative shadow-lg transition-all hover:translate-y-1  sepia hover:filter-none focus:filter-none min-w-full min-h-auto ${
          !playing ? "sepia" : "filter-none"
        }`}
      >
        <Image
          src={"/images/yt3.png"}
          fill="true"
          className={`aspect-w-16 aspect-h-9 max-w-full min-h-full transition-all blur-sm -z-10 ${
            !ready ? "opacity-100" : "opacity-0"
          }`}
          alt="YouTube Video Thumbnail"
        />

        <YouTube
          onPlay={() => setPlaying(() => true)}
          onPause={() => setPlaying(() => false)}
          onReady={() => setReady(() => true)}
          videoId={videoId}
          className={` transition-all ${ready ? "opacity-100" : "opacity-0"}`}
          iframeClassName="aspect-w-16 aspect-h-9 w-full min-h-[600px]"
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

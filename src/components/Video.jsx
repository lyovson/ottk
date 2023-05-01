"use client";

import { motion } from "framer-motion";
import YouTube from "react-youtube";

const videoVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 100 },
};

export default function Video({ videoId }) {
  return (
    <motion.section className="flex w-full  flex-col items-center gap-8 ">
      <article
        className={`relative block  w-full border-8 border-stone-900 bg-stone-900`}
      >
        <YouTube
          key="video"
          videoId={videoId}
          className={`mx-auto`}
          iframeClassName={`aspect-video w-full h-fit  `}
        />
      </article>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";

import Video from "../components/Video.jsx";
import Trailer from "./Trailer.js";

export default function Site() {
  return (
    <motion.section
      className="flex w-full flex-col gap-8"
      key="case"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <Trailer videoId="UaP1C6Wuf9o" /> */}
      <article className="flex flex-col gap-4 bg-stone-900 bg-opacity-80 p-8 text-center text-xl">
        {`Get ready to be captivated by "OTTK: Mulberry Moonshine," an exhilarating action-packed Armenian film that combines the thrill of a heist with the humor of linguistic misadventures. Written and directed by the talented Serj Gabyan, this movie promises to be a rollercoaster ride of excitement, laughter, and suspense.`}
      </article>
      <Video videoId="UaP1C6Wuf9o" />
    </motion.section>
  );
}

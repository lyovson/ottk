"use client";

import { motion } from "framer-motion";

import Video from "../../components/Video.jsx";
import { convos } from "../../data/convos.js";

export default function Contact() {
  return (
    <motion.section
      key="convo "
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row flex-wrap gap-8"
    >
      {convos.map((convo) => (
        <Video videoId={convo.videoId} />
      ))}
    </motion.section>
  );
}

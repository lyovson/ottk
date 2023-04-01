"use client";

import { motion } from "framer-motion";

import Trailer from "./Trailer.js";

export default function Site() {
  return (
    <motion.section
      className="w-full"
      key="case"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Trailer videoId="UaP1C6Wuf9o" />
    </motion.section>
  );
}

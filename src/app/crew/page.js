"use client";

import { motion } from "framer-motion";

import Cast from "../Cast.js";
import Crew from "../Crew.js";

export default function Contact() {
  return (
    <motion.setion
      key="crew"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8"
    >
      <Crew />
      <Cast />
    </motion.setion>
  );
}

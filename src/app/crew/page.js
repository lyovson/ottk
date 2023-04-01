"use client";

import { motion } from "framer-motion";

import Cast from "../Cast.js";
import Crew from "../Crew.js";

export default function Contact() {
  return (
    <motion.setion
      key="crew"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-8"
    >
      <Crew />
      <Cast />
    </motion.setion>
  );
}

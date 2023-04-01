"use client";

import { motion } from "framer-motion";

import Premise from "../Premise.js";

export default function Contact() {
  return (
    <motion.section
      key="crede"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Premise />
    </motion.section>
  );
}

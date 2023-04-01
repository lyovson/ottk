"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      key="convo "
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      Convo
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      key="convo "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Convo
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Contact
    </motion.section>
  );
}

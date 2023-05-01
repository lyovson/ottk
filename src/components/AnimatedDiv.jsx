"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedDiv({ children }) {
  return <AnimatePresence>{children}</AnimatePresence>;
}

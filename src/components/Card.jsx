"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  initial: { y: 0 },
  hover: { y: 5 },
};

export default function Card({ hero, imgClass }) {
  return (
    <motion.article
      layout
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      className="bg-stone-900  bg-opacity-80 p-4  "
    >
      <Image
        className={`  ${imgClass}`}
        src={hero.image}
        width={200}
        height={200}
        alt={hero.character}
      />
      <div>
        <h3 className="py-4 text-center">
          {hero.actor}
          <span className="block font-heading  text-3xl uppercase text-orange-100 ">
            {hero.character}
          </span>
        </h3>
      </div>
    </motion.article>
  );
}

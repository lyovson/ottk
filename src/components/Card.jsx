"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  initial: { y: 0 },
  hover: { y: 5 },
};

export default function Card({ hero, imgClass }) {
  return (
<<<<<<< HEAD
    <article className="p-4  bg-stone-900 bg-opacity-80  shadow-lg transition-all hover:translate-y-1 active:filter-none">
=======
    <motion.article
      layout
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
      className="bg-stone-900  bg-opacity-80 p-4    "
    >
>>>>>>> beta
      <Image
        className={`  ${imgClass}`}
        src={hero.image}
        width={200}
        height={200}
        alt={hero.character}
      />
      <div>
        <h3 className="text-center py-4">
          {hero.actor}
          <span className="font-heading uppercase  block text-3xl text-orange-100 ">
            {hero.character}
          </span>
        </h3>
      </div>
    </motion.article>
  );
}

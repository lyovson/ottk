"use client";

import { motion } from "framer-motion";
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
      className="rounded-xl   bg-stone-900 bg-opacity-80 shadow-lg "
    >
      <Image
        className={` rounded-xl  border-hidden ${imgClass}`}
        src={hero.image}
        width={300}
        height={300}
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

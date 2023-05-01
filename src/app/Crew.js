"use client";

import { motion } from "framer-motion";

import Card from "../components/Card.jsx";
import Heading from "../components/Heading.jsx";
import { crew } from "../data/crew.js";

export default function Crew() {
  return (
    <motion.article className="flex flex-col items-center  gap-8">
      <Heading>Crew:</Heading>
      <motion.section className="flex flex-row  flex-wrap justify-center gap-4">
        {crew.map((hero) => (
          <Card key={hero.character} hero={hero} />
        ))}
      </motion.section>
    </motion.article>
  );
}

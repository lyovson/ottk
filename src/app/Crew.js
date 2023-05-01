<<<<<<< HEAD
import { cast } from "../data/cast.js";
=======
"use client";

import { motion } from "framer-motion";

import Card from "../components/Card.jsx";
import Heading from "../components/Heading.jsx";
import { crew } from "../data/crew.js";
>>>>>>> beta

import Card from "../components/Card.jsx";

import Heading from "../components/Heading.jsx";

export default function Crew() {
  return (
<<<<<<< HEAD
    <section className="flex flex-col gap-8 items-center  max-w-5xl">
      <Heading>Crew:</Heading>
      <section className="flex gap-4 flex-row  flex-wrap justify-center max-w-5xl">
        <Card
          hero={{
            actor: "Serj Gabyan",
            character: "Director",
            image: "/images/serj.jpeg",
          }}
        />
        <Card
          imgClass="-scale-x-100"
          hero={{
            actor: "Serj Gabyan",
            character: "Writer",
            image: "/images/serj.jpeg",
          }}
        />
        <Card
          hero={{
            actor: "Serj Gabyan",
            character: "Producer",
            image: "/images/serj.jpeg",
          }}
        />
      </section>
      <Heading>Cast:</Heading>
      <section className="flex gap-4 flex-wrap justify-center max-w-5xl">
        {cast.map((hero) => (
=======
    <motion.article className="flex flex-col items-center  gap-8">
      <Heading>Crew:</Heading>
      <motion.section className="flex flex-row  flex-wrap justify-center gap-4">
        {crew.map((hero) => (
>>>>>>> beta
          <Card key={hero.character} hero={hero} />
        ))}
      </motion.section>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";

import Heading from "../components/Heading.jsx";

export default function Description() {
  return (
    <motion.section className=" flex flex-col items-center  gap-8">
      <Heading> Premise: </Heading>
      <article className="flex flex-col gap-4 bg-stone-900 bg-opacity-80 p-8 text-xl">
        <p>
          {`Get ready to be captivated by "OTTK: Mulberry Moonshine," an exhilarating action-packed Armenian film that combines the thrill of a heist with the humor of linguistic misadventures. Written and directed by the talented Serj Gabyan, this movie promises to be a rollercoaster ride of excitement, laughter, and suspense.`}
        </p>

        <p>
          {`Imagine this: Bagrat, a wealthy American Armenian, facing some serious heat from his ex-partner Vle, decides to bring together a team of talented Armenian thieves from every corner of the world. Now, this ain't your ordinary heist, no sir! We're talking about a wild, chaotic rollercoaster of a ride with a distinctly "Armenian-ish" flavor.`}
        </p>

        <p>
          {`These skilled individuals ain't just any thieves; they're as diverse as it gets. And you know what? They don't even speak the same dialect! So, as they try to pull off the ultimate heist, they've got to navigate language barriers, dodge the police, face the mafia, and stumble upon some unexpected twists and turns. Talk about a recipe for mayhem!`}
        </p>

        <p>
          {`But hey, it ain't all chaos and confusion. Along the way, you'll get a taste of the rich Armenian culture and heritage that ties these characters together in this unforgettable tale.`}
        </p>

        <p>
          {`So, buckle up and join us on this one-of-a-kind journey, filled with action, humor, and a whole lot of heart. Get ready to experience the wild side of "OTTK: Mulberry Moonshine", and trust me, you'll never forget it!`}
        </p>
      </article>
    </motion.section>
  );
}

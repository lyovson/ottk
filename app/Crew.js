import { cast } from "./cast.js";

import Card from "./Card.jsx";
import Heading from "./Heading.jsx";

export default function Crew() {
  return (
    <section className="flex flex-col gap-8 items-center ">
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
          <Card key={hero.character} hero={hero} />
        ))}
      </section>
    </section>
  );
}
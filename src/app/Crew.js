import Card from "../components/Card.jsx";
import Heading from "../components/Heading.jsx";
import { cast } from "../data/cast.js";

export default function Crew() {
  return (
    <section className="flex max-w-5xl flex-col items-center  gap-8">
      <Heading>Crew:</Heading>
      <section className="flex max-w-5xl flex-row  flex-wrap justify-center gap-4">
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
      <section className="flex max-w-5xl flex-wrap justify-center gap-4">
        {cast.map((hero) => (
          <Card key={hero.character} hero={hero} />
        ))}
      </section>
    </section>
  );
}

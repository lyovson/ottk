import Card from "../components/Card.jsx";
import Heading from "../components/Heading.jsx";
import { cast } from "../data/cast.js";

export default function Cast() {
  return (
    <section className="flex flex-col items-center  gap-8">
      <Heading>Cast:</Heading>
      <section className="flex flex-wrap justify-center gap-4">
        {cast.map((hero) => (
          <Card key={hero.character} hero={hero} />
        ))}
      </section>
    </section>
  );
}

import Heading from "../components/Heading.jsx";
export default function Description() {
  return (
    <section className="flex flex-col gap-8 items-center  max-w-5xl">
      <Heading> Premise: </Heading>
      <article className=" flex flex-col gap-4 bg-stone-900 bg-opacity-80 shadow-lg transition-all text-xl  hover:translate-y-1 p-8">
        <p>
          {`Get ready to be captivated by "OTTK: The Air, The Mulberry, and
      The Gun Handle," an exhilarating, action-packed Armenian film that
      combines the thrill of a heist with the humor of linguistic
      misadventures. Written and directed by the talented Serj Gabyan,
      this movie promises to be a rollercoaster ride of excitement,
      laughter, and suspense.`}
        </p>
        <p>
          {`When a wealthy Armenian businessman, Bagrat, assembles a diverse
      team of skilled individuals from all corners of the globe, their
      mission seems straightforward: pull off a daring, high-stakes
      heist. However, the team members quickly discover that their
      linguistic differences and the resulting miscommunications pose a
      hilarious, yet challenging obstacle. As they struggle to overcome
      the language barriers, the crew finds themselves entangled in a
      web of laugh-out-loud misunderstandings, making their mission,
      quite literally, "impossible."`}
        </p>
        <p>
          {`Along the way, the team encounters unexpected twists and turns as
      they strive to outsmart their adversaries, all while attempting to
      navigate the nuances of each other's cultures and dialects. From
      the narrow, winding streets of Yerevan to the breathtaking
      landscapes of the Armenian countryside, "OTTK" takes viewers on a
      thrilling journey that will keep them on the edge of their seats.`}
        </p>
      </article>
    </section>
  );
}

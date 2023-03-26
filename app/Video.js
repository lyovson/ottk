import Heading from "./Heading.jsx";
export default function Video() {
  return (
    <section className="flex flex-col gap-8 items-center  max-w-5xl">
      <Heading> Trailer: </Heading>
      <aside className="shadow-lg transition-all hover:translate-y-1  sepia hover:filter-none focus:filter-none  ">
        <iframe
          style={{
            width: "90cqw",
            aspectRatio: "16/9",
          }}
          src="https://www.youtube.com/embed/UaP1C6Wuf9o"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </aside>
    </section>
  );
}

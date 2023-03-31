import Image from "next/image";

export default function Card({ hero, imgClass }) {
  return (
    <article className="bg-stone-900  bg-opacity-80 p-4  shadow-lg transition-all hover:translate-y-1 active:filter-none">
      <Image
        className={`  ${imgClass}`}
        src={hero.image}
        width={250}
        height={200}
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
    </article>
  );
}

import Image from "next/image";

export default function Card({ hero, imgClass }) {
  return (
    <article className="p-4  bg-stone-900 bg-opacity-80  shadow-lg transition-all hover:translate-y-1 active:filter-none">
      <Image
        className={` sepia hover:filter-none ${imgClass}`}
        src={hero.image}
        width={250}
        height={200}
        alt={hero.character}
      />
      <div>
        <h3 className="text-center text-xl py-4">
          {hero.actor}
          <span className="font-heading uppercase  block text-3xl text-red-800">
            {hero.character}
          </span>
        </h3>
      </div>
    </article>
  );
}

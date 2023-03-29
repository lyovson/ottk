"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import Card from "../../components/Card.jsx";
import Heading from "../../components/Heading.jsx";
import { cast } from "../../data/cast.js";

export default function Test() {
  const [active, setActive] = useState(false);
  const hero = { ...cast.filter((hero) => hero.character === "onik")[0] };
  return (
    <>
      <Heading>Onik:</Heading>
      <section
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="flex gap-4 flex-wrap transition-all "
      >
        {active ? (
          <Card hero={{ ...hero, image: "/onik/onik.jpg" }} />
        ) : (
          <Card hero={{ ...hero, image: "/onik/onik-bw.jpg" }} />
        )}
      </section>
      <footer className=" flex justify-center gap-4 text-5xl text-yellow-600">
        <a
          href="https://www.facebook.com/ottkfilm"
          target="_blank"
          className="shadow-lg transition-all hover:translate-y-1 active:filter-none"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          href="https://www.instagram.com/ottk_film/"
          target="_blank"
          className="shadow-lg transition-all hover:translate-y-1 active:filter-none"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href="https://youtube.com/@hooligunstudios"
          target="_blank"
          className="shadow-lg transition-all hover:translate-y-1 active:filter-none"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>
        <a
          href="https://twitter.com/lyovson"
          target="_blank"
          className="shadow-lg transition-all hover:translate-y-1 active:filter-none"
        >
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </footer>
    </>
  );
}

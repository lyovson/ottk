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
    </>
  );
}

"use client";
<<<<<<< HEAD
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
=======

import LinkPreview from "@/components/LinkPreview.jsx";
>>>>>>> beta

export default function Test() {
  return (
<<<<<<< HEAD
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
=======
    <div className="flex flex-row flex-wrap gap-4 ">
      <LinkPreview url="https://bravo.am/news/77291?fbclid=IwAR1dt0qeorYWGPKdWpBTYb45wileSTgC7AqGjG3gKR-nL9a-XY7CgqrPWH4" />
      <LinkPreview url="https://www.youtube.com/watch?v=rYmIC5VdQOg&ab_channel=LevonBeglaryan&fbclid=IwAR367zZZW-MMZH8iDsaAGXCSdGpjLwsdYQZC_ZDDBNWBLETlg3icU96JZf8" />
      <LinkPreview url="https://style.news.am/eng/news/96362/arsen-grigoryan-speaks-on-new-armenian-comedy-film-ottk-new-collaboration-with-sarik-andreasyan.html" />
      <LinkPreview url="https://style.news.am/eng/news/96362/arsen-grigoryan-speaks-on-new-armenian-comedy-film-ottk-new-collaboration-with-sarik-andreasyan.html" />
      <LinkPreview url="https://style.news.am/eng/news/96362/arsen-grigoryan-speaks-on-new-armenian-comedy-film-ottk-new-collaboration-with-sarik-andreasyan.html" />
      <LinkPreview url="https://style.news.am/eng/news/96362/arsen-grigoryan-speaks-on-new-armenian-comedy-film-ottk-new-collaboration-with-sarik-andreasyan.html" />
    </div>
>>>>>>> beta
  );
}

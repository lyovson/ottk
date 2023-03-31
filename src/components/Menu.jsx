"use client";

import {
  faBarcode,
  faComments,
  faPaperPlane,
  faPeopleGroup,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItemVariants = {
  initial: { scale: 1, color: "rgb(255 237 213)" },
  hover: { scale: 1.1, color: "rgb(220 38 38)" },
  active: { scale: 1, color: "rgb(220 38 38)" },
};

const routeToLabel = (route) => {
  switch (route) {
    case "/":
      return "Case";
    case "/crew":
      return "Crew";
    case "/convo":
      return "Convo";
    case "/contact":
      return "Contact";
    case "/crede":
      return "Crede";
    default:
      return "";
  }
};

export default function Menu() {
  const active = routeToLabel(usePathname());

  return (
    <div className=" fixed bottom-0 left-0 right-0 flex items-center justify-around  border-t border-stone-900 bg-stone-900 py-2 text-orange-100 shadow-md lg:left-4 lg:right-auto lg:bottom-auto lg:top-1/2 lg:h-[50%] lg:w-16 lg:-translate-y-1/2 lg:transform  lg:flex-col lg:rounded-xl lg:border-t-0 lg:bg-opacity-80">
      {[
        { href: "/", icon: faPhotoFilm, label: "Case" },
        { href: "/crede", icon: faBarcode, label: "Crede" },
        { href: "/crew", icon: faPeopleGroup, label: "Crew" },
        { href: "/convo", icon: faComments, label: "Convo" },
        { href: "/contact", icon: faPaperPlane, label: "Contact" },
      ].map((item, index) => (
        <Link key={index} href={item.href}>
          <motion.div
            className="flex cursor-pointer flex-col items-center gap-1 text-orange-100 lg:mb-4"
            variants={navItemVariants}
            initial="initial"
            animate={active === item.label ? "active" : "initial"}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />
            <span className="text-xs">{item.label}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

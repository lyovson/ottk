const heroes = [
  { character: "director", actor: "Serj Gabyan", image: "gabyan" },
  { character: "writer", actor: "Lilit Mkrtchyan", image: "lilit" },
  {
    character: "Assistent to Director",
    actor: "Milena Mikaelyan",
    image: "milena",
  },
  { character: "Costume Designer", actor: "Helen Titanyan", image: "helen" },
  {
    character: "Director of Photography",
    actor: "Hovhannes Poghosyan",
    image: "hovo",
  },
];

export const crew = heroes.map((hero) => ({
  ...hero,
  image: "/images/crew/" + hero.image + ".png",
}));

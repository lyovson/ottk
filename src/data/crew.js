const heroes = [
  { character: "writer", actor: "Serj Gabyan", image: "serj" },
  { character: "director", actor: "Serj Gabyan", image: "serj" },
  { character: "producer", actor: "Serj Gabyan", image: "serj" },
  { character: "editor", actor: "Serj Gabyan", image: "serj" },
].sort((a, b) => a.character.localeCompare(b.character));

export const crew = heroes.map((hero) => ({
  ...hero,
  image: "/images/" + hero.image + ".jpeg",
}));

const heroes = [
  { character: "vle", actor: "Armen Sargsyan" },
  { character: "vigo", actor: "Andranik Hakobyan" },
  { character: "onik", actor: "Narek A-Chilla" },
  { character: "nazo", actor: "Hripsime Nahapetyan" },
  { character: "mouraz", actor: "Saten Ghazaryan" },
  { character: "martin", actor: "Harutyun Topalidis" },
  { character: "kyaj", actor: "Arsen Grigoryan" },
  { character: "karo", actor: "Aram Karakhanyan" },
  { character: "hamlet", actor: "Ruben Abrahamyan" },
  { character: "hakob", actor: "Adam Ayvazyan" },
  { character: "gips", actor: "Armen Petrosyan" },
  { character: "eddie", actor: "Areg Balayan" },
  { character: "bobbie", actor: "Milena Mikaelyan" },
  { character: "bagrat", actor: "Jirayr Babazyan" },
  { character: "ashot", actor: "Arman Ghazaryan" },
  { character: "gaspar", actor: "Sargis Kirakosyan" },
  { character: "misha", actor: "Lilit Karapetyan" },
  { character: "vito", actor: "Arsine Navasardyan" },
].sort((a, b) => a.character.localeCompare(b.character));

export const cast = heroes.map((hero) => ({
  ...hero,
  image: "/images/cast/" + hero.character + ".jpg",
}));

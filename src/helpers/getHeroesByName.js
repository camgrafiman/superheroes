import { heroes } from "../data/heroes";
export const getHeroesByName = (name = "") => {
  console.log("getHeroesByName function fired.");
  name = name.toLowerCase();

  if (name === "") {
    return [];
  }

  return heroes.filter(
    (hero) =>
      hero.superhero.toLowerCase().includes(name) ||
      hero.alter_ego.toLowerCase().includes(name)
  );
};

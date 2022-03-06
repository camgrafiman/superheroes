import { heroes } from "../data/heroes";
export const getHeroById = (id = "") => {
  return heroes.filter((hero) => hero.id === id)[0];
};

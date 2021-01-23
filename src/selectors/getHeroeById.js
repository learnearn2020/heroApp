import { heroes } from "../data/hereos";
export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

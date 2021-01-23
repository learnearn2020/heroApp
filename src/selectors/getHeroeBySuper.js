import { heroes } from "../data/hereos";
export const getHeroeBySuper = (superhero) => {
  //   const listPublisher = ["Marvel Comics", "DC Comics"];
  superhero = superhero.toLowerCase();
  if (superhero === "") {
    return [];
  }
  return heroes.filter((heroe) =>
    heroe.superhero.toLowerCase().includes(superhero)
  );
};

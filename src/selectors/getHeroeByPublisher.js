import { heroes } from "../data/hereos";
export const getHeroeByPublisher = (publisher) => {
  const listPublisher = ["Marvel Comics", "DC Comics"];
  if (!listPublisher.includes(publisher)) {
    throw new Error(`Este publisher ${publisher} no existe en ña lista`);
  }
  return heroes.filter((heroe) => heroe.publisher === publisher);
};

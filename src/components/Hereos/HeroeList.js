import React, { useMemo } from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher";
import { HeroCard } from "./HeroCard";
import "./heroes.css";

export const HeroeList = ({ publisher }) => {
  //guardar la info si no cambia el parametro
  const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);
  return (
    <div className="heroes">
      {heroes.map((heroe) => (
        <HeroCard {...heroe} key={heroe.id} />
      ))}
    </div>
  );
};

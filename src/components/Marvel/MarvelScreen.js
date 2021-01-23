import React from "react";
import { HeroeList } from "../Hereos/HeroeList";

export const MarvelScreen = () => {
  return (
    <>
      <h1>Marvel</h1>
      <hr />
      <HeroeList publisher="Marvel Comics" />
    </>
  );
};

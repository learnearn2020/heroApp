import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroeScreen = ({ history }) => {
  const handleBack = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);
  const { id, superhero, characters } = heroe;
  return (
    <div className="row g-0">
      <div className="col-md-4">
        <img
          style={{ width: 270 }}
          src={`../assets/heroes/${id}.jpg`}
          className="img-fluid card-img"
          alt={superhero}
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{characters}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
          <button onClick={handleBack} className="btn btn-outline-primary">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

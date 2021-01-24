import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
// import { heroes } from "../../data/hereos";
// import { getHeroeByPublisher } from "../../selectors/getHeroeBySuper";
import { getHeroeBySuper } from "../../selectors/getHeroeBySuper";
// import { getHeroeBySuper } from "../../selectors/getHeroeByPublisher";
import { HeroCard } from "../Hereos/HeroCard";
import { UseForm } from "../hooks/UseForm";
export const Search = ({ history }) => {
  //   const [inputSearch, setInputSearch] = useState("");
  //   const [heroes, setHeroes] = useState([]);
  const loc = useLocation();
  const { q = "" } = queryString.parse(loc.search);
  //   console.log(p);
  //   let heroes = [];
  const [values, handleInputChange] = UseForm({ inputSearch: q });
  const { inputSearch } = values;
  // usar useMemo para que
  const heroes = useMemo(() => getHeroeBySuper(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${inputSearch}`);

    // setHeroes(getHeroeByPublisher(inputSearch));
    // console.log(heroes);
  };
  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row container">
        <div className="col-md-5 ">
          <h1>Search form</h1>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={inputSearch}
                onChange={handleInputChange}
                name="inputSearch"
                className="form-control"
                placeholder="search for a hero"
              />
            </div>
            <button className="btn btn-success b-btn mt-2" type="submit">
              Search...
            </button>
          </form>
        </div>
        <div className="col-md-7">
          <h2>Result</h2>
          <hr />
          {q === "" && (
            <div className="alert alert-info"> search for a hero ... </div>
          )}
          {q !== "" && heroes.length === 0 && (
            <div className="alert alert-danger"> there is no hero for {q} </div>
          )}
          {heroes.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

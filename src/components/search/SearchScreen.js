import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  // console.log(location);

  let initialForm = {
    searchText: q,
  };
  const [formValues, handleInputChange] = useForm(initialForm);

  const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);
  // const heroesFiltrados = getHeroesByName(formValues.searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(formValues.searchText);
    navigate(`?q=${formValues.searchText}`);
  };

  return (
    <>
      <h1>Búsquedas:</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              className="form-control"
              type="text"
              name="searchText"
              id="searchText"
              autoComplete="off"
              placeholder="Buscar un héroe"
              value={formValues.searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-info">Buscar Heroes</div>
          ) : (
            heroesFiltrados.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados con el término: {q}
              </div>
            )
          )}

          {heroesFiltrados.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

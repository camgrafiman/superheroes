import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroScreen = (propsHero) => {
  const params = useParams();
  const datosHero = useMemo(() => getHeroById(params.heroId), [params.heroId]);

  // Hook para redirigir:
  const navigate = useNavigate();

  const handleReturn = () => {
    // Enviar al usuario atrás
    navigate(-1);
  };

  if (!datosHero) {
    return <Navigate to="/" />;
  }
  const imagePath =
    process.env.PUBLIC_URL + `/images/heroes/${datosHero.id}.jpg`;
  return (
    <div>
      <div className="row mt-5">
        <div className=" col-sm-12 col-md-4">
          <img
            className="img-thumbnail animate__animated animate__fadeInLeft"
            src={imagePath}
            alt={datosHero.superhero}
          />
        </div>
        <div className="col-8">
          <h3>{datosHero.superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Alter ego: {datosHero.alter_ego} </b>
            </li>
            <li className="list-group-item">
              <b>Publiser: {datosHero.publisher} </b>
            </li>
            <li className="list-group-item">
              <b>First appearance: {datosHero.first_appearance} </b>
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{datosHero.characters}</p>
          <hr />
          <button className="btn btn-dark" onClick={handleReturn}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

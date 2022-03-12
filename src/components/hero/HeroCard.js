import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = process.env.PUBLIC_URL + `/images/heroes/${id}.jpg`;
  return (
    <div className="col-sm-12 animate__animated animate__fadeIn">
      <Link to={`/hero/${id}`}>
        <div className="card mt-2">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={imagePath} className="img-fluid" alt={superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                {alter_ego !== characters && (
                  <p className="text-muted">{characters}</p>
                )}

                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                {/* <Link to={`/hero/${id}`}> Más info</Link> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

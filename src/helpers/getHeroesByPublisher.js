import { heroes } from "../data/heroes";
export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    // return <div className="error">Not a valid publisher.</div>;
    throw new Error(`${publisher} is not a valid publisher.`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};

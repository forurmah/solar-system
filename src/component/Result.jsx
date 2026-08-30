import { PLANETS } from "../data/planet";

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function Result({ result }) {
  if (!result) return null;

  const { planetKey, earthWeight, calculatedWeight } = result;
  const planet = PLANETS[planetKey];
  const formattedWeight = calculatedWeight.toFixed(2);

  return (
    <section className="result-container" aria-live="polite">
      <div className="result-box">
        <img src={`/images/${planet.image}`} alt={capitalize(planetKey)} />
        <div className="result-text">
          <p className="big">Your weight on {capitalize(planetKey)}: {formattedWeight} kg</p>
          <div className="calculation-details"><p>{earthWeight} kg × {planet.gravity} (gravity) = {formattedWeight} kg</p></div>
        </div>
      </div>
    </section>
  );
}

export default Result;

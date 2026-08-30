import { PLANETS } from "../data/planet";

function WeightForm({ mass, selectedPlanet, onMassChange, onPlanetChange, onCalculate }) {
  function handleSubmit(event) {
    event.preventDefault();
    onCalculate();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="mass">Mass in kilograms</label>
      <input id="mass" type="text" inputMode="decimal" placeholder="Mass in kg" value={mass} onChange={(event) => onMassChange(event.target.value)} />
      <label className="sr-only" htmlFor="planet">Planet</label>
      <select id="planet" value={selectedPlanet} onChange={(event) => onPlanetChange(event.target.value)}>
        <option value="">Select a planet</option>
        {Object.keys(PLANETS).map((planetKey) => (
          <option key={planetKey} value={planetKey}>{planetKey.charAt(0).toUpperCase() + planetKey.slice(1)}</option>
        ))}
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default WeightForm;

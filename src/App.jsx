import { useState } from "react";
import ErrorMessages from "./component/ErrorMessages";
import Result from "./component/Result";
import WeightForm from "./component/WeightForm";
import { PLANETS } from "./data/planet";
import "./App.css";

function getValidationError(mass, planetKey) {
  if (mass.trim() === "") return "MASS is required.";

  const numericMass = Number(mass);
  if (!Number.isFinite(numericMass)) return "MASS must be a valid number.";
  if (numericMass <= 0) return "MASS must be greater than zero.";
  if (!planetKey || !PLANETS[planetKey]) return "Please select a planet.";

  return null;
}

function App() {
  const [mass, setMass] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function handleCalculate() {
    const validationError = getValidationError(mass, selectedPlanet);

    if (validationError) {
      setError(validationError);
      setResult(null);
      return;
    }

    const earthWeight = Number(mass);
    const gravity = PLANETS[selectedPlanet].gravity;

    setError("");
    setResult({
      planetKey: selectedPlanet,
      earthWeight,
      calculatedWeight: earthWeight * gravity,
    });
  }

  return (
    <main className="calculator">
      <h1>Calculate Your Weight on a Planet</h1>
      <WeightForm mass={mass} selectedPlanet={selectedPlanet} onMassChange={setMass} onPlanetChange={setSelectedPlanet} onCalculate={handleCalculate} />
      <ErrorMessages message={error} />
      <Result result={result} />
    </main>
  );
}

export default App;

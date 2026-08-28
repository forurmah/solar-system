// ---------------------------------------------
// Planet data
// ---------------------------------------------
const space = {
  mercury: { gravity: 0.38, image: "mercury.png" },
  venus: { gravity: 0.91, image: "venus.png" },
  earth: { gravity: 1.0, image: "earth.png" },
  mars: { gravity: 0.38, image: "mars.png" },
  jupiter: { gravity: 2.34, image: "jupiter.png" },
  saturn: { gravity: 0.93, image: "saturn.png" },
  uranus: { gravity: 0.92, image: "uranus.png" },
  neptune: { gravity: 1.12, image: "neptune.png" },
};

// ---------------------------------------------
// DOM references
// ---------------------------------------------
const input = document.querySelector("input");
const select = document.querySelector("select");
const button = document.querySelector("button");
const errorContainer = document.querySelector(".error-container");
const resultContainer = document.querySelector(".result-container");

// ---------------------------------------------
// Validation
// Returns an error message string, or null if input is valid
// ---------------------------------------------
function getValidationError(weightValue, planetKey) {
  if (weightValue.trim() === "") {
    return "MASS is required.";
  }

  const numericWeight = Number(weightValue);

  if (!Number.isFinite(numericWeight)) {
    return "MASS must be a valid number.";
  }

  if (numericWeight <= 0) {
    return "MASS must be greater than zero.";
  }

  if (!planetKey || !space[planetKey]) {
    return "Please select a planet.";
  }

  return null;
}

function showError(message) {
  resultContainer.innerHTML = "";

  errorContainer.innerHTML = "";
  const errorBox = document.createElement("p");
  errorBox.className = "error";
  errorBox.textContent = message;
  errorContainer.appendChild(errorBox);
}

function clearError() {
  errorContainer.innerHTML = "";
}

function showResult(planetKey, earthWeight, calculatedWeight) {
  clearError();
  resultContainer.innerHTML = "";

  const resultBox = document.createElement("div");
  resultBox.className = "result-box";

  const image = document.createElement("img");
  image.src = `images/${space[planetKey].image}`;
  image.alt = planetKey;

  const textBox = document.createElement("div");
  textBox.className = "result-text";

  const heading = document.createElement("p");
  heading.className = "big";
  heading.textContent = `Your weight on ${capitalize(planetKey)}: ${calculatedWeight.toFixed(2)} kg`;

  const detailBox = document.createElement("div");
  detailBox.className = "calculation-details";

  const detailText = document.createElement("p");
  detailText.textContent =
    `${earthWeight} kg × ${space[planetKey].gravity} (gravity) = ${calculatedWeight.toFixed(2)} kg`;

  detailBox.appendChild(detailText);
  textBox.appendChild(heading);
  textBox.appendChild(detailBox);

  resultBox.appendChild(image);
  resultBox.appendChild(textBox);
  resultContainer.appendChild(resultBox);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

button.addEventListener("click", () => {
  const weightValue = input.value;
  const planetKey = select.value;

  const errorMessage = getValidationError(weightValue, planetKey);

  if (errorMessage) {
    showError(errorMessage);
    return;
  }

  const earthWeight = Number(weightValue);
  const calculatedWeight = earthWeight * space[planetKey].gravity;

  showResult(planetKey, earthWeight, calculatedWeight);
});

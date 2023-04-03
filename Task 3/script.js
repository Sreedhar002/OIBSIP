const sourceUnit = document.getElementById("source-unit");
const destinationUnit = document.getElementById("destination-unit");
const temperature = document.getElementById("temperature");
const convertButton = document.getElementById("convert-button");
const resultText = document.getElementById("result-text");

convertButton.addEventListener("click", function () {
  const sourceUnitValue = sourceUnit.value;
  const destinationUnitValue = destinationUnit.value;
  const temperatureValue = temperature.value;

  if (sourceUnitValue === "celsius") {
    if (destinationUnitValue === "farenheit") {
      resultText.textContent = `${(temperatureValue * 9) / 5 + 32}°F`;
    } else if (destinationUnitValue === "kelvin") {
      resultText.textContent = `${parseFloat(temperatureValue) + 273.15}K`;
    } else {
      resultText.textContent = `${temperatureValue}°C`;
    }
  } else if (sourceUnitValue === "farenheit") {
    if (destinationUnitValue === "celsius") {
      resultText.textContent = `${((temperatureValue - 32) * 5) / 9}°C`;
    } else if (destinationUnitValue === "kelvin") {
      resultText.textContent = `${((temperatureValue - 32) * 5) / 9 + 273.15}K`;
    } else {
      resultText.textContent = `${temperatureValue}°F`;
    }
  } else if (sourceUnitValue === "kelvin") {
    if (destinationUnitValue === "celsius") {
      resultText.textContent = `${parseFloat(temperatureValue) - 273.15}°C`;
    } else if (destinationUnitValue === "farenheit") {
      resultText.textContent = `${((temperatureValue - 273.15) * 9) / 5 + 32}°F`;
    } else {
      resultText.textContent = `${temperatureValue}K`;
    }
  }
});

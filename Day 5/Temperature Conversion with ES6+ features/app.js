// access the temperature conversion scale text
const temperatureScaleText = document.getElementsByClassName("scale")[0];

// access the temperature input element
const temperatureInput =
  document.getElementsByClassName("temperature-input")[0];

// Prevent paste action
temperatureInput.addEventListener("paste", function (event) {
  event.preventDefault();
});

// access the temperature output element
const temperatureOutput =
  document.getElementsByClassName("temperature-output")[0];

// access the invert conversion scale button
const invertButton = document.getElementsByClassName("convert-button")[0];

// function to convert temperature from celsius to fahrenheit
temperatureInput.addEventListener("input", () => {
  if (temperatureInput.value === "") {
    temperatureOutput.value = "";
    return;
  }
  if (temperatureScaleText.innerHTML === "Celsius to Fahrenheit") {
    temperatureOutput.value =
      (temperatureInput.value * 1.8 + 32).toFixed(2) + "°F";
  } else {
    temperatureOutput.value =
      ((temperatureInput.value - 32) / 1.8).toFixed(2) + "°C";
  }
});

invertButton.addEventListener("click", () => {
  if (temperatureScaleText.innerHTML === "Celsius to Fahrenheit") {
    temperatureScaleText.innerHTML = "Fahrenheit to Celsius";
    if (temperatureInput.value !== "") {
      temperatureOutput.value =
        ((temperatureInput.value - 32) / 1.8).toFixed(2) + "°C";
    } else {
      temperatureOutput.value = "";
    }
  } else {
    temperatureScaleText.innerHTML = "Celsius to Fahrenheit";
    if (temperatureInput.value !== "") {
      temperatureOutput.value =
        (temperatureInput.value * 1.8 + 32).toFixed(2) + "°F";
    } else {
      temperatureOutput.value = "";
    }
  }
});

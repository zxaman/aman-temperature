const celsiusInput = document.getElementById("celsius");
const fahrenheitOutput = document.getElementById("fahrenheit");
const kelvinOutput = document.getElementById("kelvin");

function convert() {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = celsius * (9 / 5) + 32;
  console.log("in degree F");
  const kelvin = celsius + 273.15;

  fahrenheitOutput.innerHTML = `${fahrenheit}°F`;
  kelvinOutput.innerHTML = `${kelvin}°K`;
}
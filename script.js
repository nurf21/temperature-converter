const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const resultText = document.getElementById("resultText");

function validateForm() {
  convertBtn.disabled = !(tempInput.value && fromUnit.value && toUnit.value);
}

tempInput.addEventListener("input", validateForm);
fromUnit.addEventListener("change", validateForm);
toUnit.addEventListener("change", validateForm);

convertBtn.addEventListener("click", () => {
  const temp = parseFloat(tempInput.value);
  const from = fromUnit.value;
  const to = toUnit.value;
  let result;

  if (from === to) {
    result = temp;
  } else if (from === "Celsius") {
    result = to === "Fahrenheit" ? (temp * 9) / 5 + 32 : temp + 273.15;
  } else if (from === "Fahrenheit") {
    result =
      to === "Celsius" ? ((temp - 32) * 5) / 9 : ((temp - 32) * 5) / 9 + 273.15;
  } else if (from === "Kelvin") {
    result = to === "Celsius" ? temp - 273.15 : ((temp - 273.15) * 9) / 5 + 32;
  }

  resultText.textContent = `${temp} ${from} is ${result.toFixed(2)} ${to}`;
});

const tempInput = document.getElementById("tempInput");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const swapBtn = document.getElementById("swapBtn");
const convertBtn = document.getElementById("convertBtn");
const resultText = document.getElementById("resultText");

const unitIcons = {
  Celsius: "🌡️",
  Fahrenheit: "🔥",
  Kelvin: "❄️",
};

function stripEmoji(text) {
  return text.replace(/[^a-zA-Z]/g, "").trim();
}

function validateForm() {
  convertBtn.disabled = !(tempInput.value && fromUnit.value && toUnit.value);
}

tempInput.addEventListener("input", validateForm);
fromUnit.addEventListener("change", validateForm);
toUnit.addEventListener("change", validateForm);

swapBtn.addEventListener("click", () => {
  const fromValue = fromUnit.value;
  const toValue = toUnit.value;

  fromUnit.value = toValue;
  toUnit.value = fromValue;

  validateForm();
});

convertBtn.addEventListener("click", () => {
  const temp = parseFloat(tempInput.value);
  const from = stripEmoji(fromUnit.value);
  const to = stripEmoji(toUnit.value);
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

  resultText.classList.remove("show");
  void resultText.offsetWidth;
  resultText.textContent = `${temp} ${
    unitIcons[from]
  } ${from} is ${result.toFixed(2)} ${unitIcons[to]} ${to}`;
  resultText.classList.add("show");
});

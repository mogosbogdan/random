const form = document.querySelector("form");
const inputField = document.querySelector("#inputField");

const output = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = inputField.value;

  output.textContent = `${inputValue} e ratat`;
});

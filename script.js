const displayedWord = document.getElementById("displayed-word");
const newWordButton = document.getElementById("new-word");

const words = ["shop", "people"];
const randomWords = words.sort(() => Math.random() - 0.5);

window.addEventListener("DOMContentLoaded", () => {
  displayedWord.textContent = randomLetters();
});

const randomLetters = () => {
  return randomWords[0]
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

const show = () => {
  displayedWord.textContent = randomLetters();
};

newWordButton.addEventListener("click", show);

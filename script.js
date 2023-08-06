const displayedWord = document.getElementById("displayed-word");
const newWordButton = document.getElementById("new-word");
const submitButton = document.getElementById("submit-button");
const input = document.getElementById("correct-word");
const message = document.getElementById("message");

const words = [
  "shop",
  "people",
  "developer",
  "angular",
  "accountability",
  "continue",
  "mathematics",
  "isixhosa",
  "traditional",
  "food",
];

window.addEventListener("DOMContentLoaded", () => {
  displayedWord.textContent = generateRandomLetters();
});

const generateRandomLetters = () => {
  const randomWords = words.sort(() => Math.random() - 0.5);
  const randomLetters = randomWords[0]
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  if (!randomWords.includes(randomLetters)) {
    return randomLetters;
  }
};

const show = () => {
  submitButton.disabled = false;
  displayedWord.textContent = '';
  message.textContent = '';
  displayedWord.textContent = generateRandomLetters();
};

const answer = (e) => {
  const randomLettersLength = displayedWord.textContent.length;

  if (input.value.length === randomLettersLength) {
    for (let i = 0; i < randomLettersLength; i++) {
      if (
        displayedWord.textContent.search(input.value[i]) !== -1 &&
        words.includes(input.value)
      ) {
        message.textContent = "Correct!";
        message.style.color = "green";
        e.target.disabled = true;
      } else {
        message.textContent = "Inorrect!";
        message.style.color = "red";
      }
    }
  } else {
    message.textContent = "Enter equal number of letters";
    message.style.color = "red";
  }
};

newWordButton.addEventListener("click", show);
submitButton.addEventListener("click", answer);

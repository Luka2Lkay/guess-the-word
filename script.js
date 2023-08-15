const displayedWord = document.getElementById("displayed-word");
const newWordButton = document.getElementById("new-word");
const submitButton = document.getElementById("submit-button");
const input = document.getElementById("correct-word");
const message = document.getElementById("message");
const showScore = document.getElementById("score");
const resetBtn = document.getElementById("reset");

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

let score = localStorage.getItem("score") || 0;

const generateRandomLetters = () => {
  const randomWords = words.sort(() => Math.random() - 0.5);
  const randomLetters = randomWords[0]
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  if (!randomWords.includes(randomLetters)) {
    return randomLetters;
  } else {
    return generateRandomLetters();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  displayedWord.textContent = generateRandomLetters();
  showScore.textContent = `Score: ${score}`;
});

const show = () => {
  submitButton.disabled = false;
  input.disabled = false;
  input.value = "";
  displayedWord.textContent = "";
  message.textContent = "";
  displayedWord.textContent = generateRandomLetters();
};

const answer = (e) => {
  const randomLettersLength = displayedWord.textContent.length;

  const sortInputValue = input.value.split("").sort().join("");
  const sortDisplayWord = displayedWord.textContent.split("").sort().join("");

  if (
    input.value.length === randomLettersLength &&
    sortInputValue === sortDisplayWord &&
    words.includes(input.value)
  ) {
    score++;
    localStorage.setItem("score", score);
    message.textContent = "Correct";
    message.style.color = "green";
    e.target.disabled = true;
    input.disabled = true;
    showScore.textContent = `Score: ${score}`;
  } else {
    score = score - 5;
    e.target.disabled = false;
    message.textContent = "Oops! You  just lost 5 points";
    message.style.color = "red";
    showScore.textContent = `Score: ${score}`;
  }
};

const reset = () => {
score = 0
localStorage.clear()
showScore.textContent = `Score: ${score}`;
input.disabled = false;
submitButton.disabled = false;
}

newWordButton.addEventListener("click", show);
submitButton.addEventListener("click", answer);
resetBtn.addEventListener('click', reset)

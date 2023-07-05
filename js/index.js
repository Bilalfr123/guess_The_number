let highScore = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const querySelector = (query, content) => {
  document.querySelector(query).textContent = content;
};
let correctNumber = getRandomInt(20);
let score = 20;
document.getElementById("check").addEventListener("click", () => {
  alert("ddd");
  querySelector(".number", "?");
  document.body.style.backgroundColor = "#222";
  const guessedValue = document.getElementById("guess").value;
  if (!guessedValue) {
    querySelector(".message", "⛔ No number");
    return;
  }
  let score = document.getElementsByClassName("score")[0].textContent;
  if (score <= 0) {
    querySelector(".message", "💥 You lost the game!");
    return;
  }
  console.log(correctNumber);
  if (guessedValue == correctNumber) {
    document.body.style.backgroundColor = "green";
    querySelector(".number", correctNumber);
    highScore = score > highScore ? score : highScore;
    querySelector(".message", "🎉 You guessed it right");
    querySelector(".highscore", highScore);
    correctNumber = getRandomInt(20);
  } else if (guessedValue > 20) {
    querySelector(".message", "Number must be between 0-20");
  } else if (guessedValue != correctNumber) {
    score--;
    querySelector(".score", score);
    querySelector(
      ".message",
      guessedValue > correctNumber ? "📈 A lil bit high" : "📉 A lil bit low"
    );
  }
  //   else if (guessedValue > correctNumber) {
  //     ("📈 A lil bit high");
  //   } else if (guessedValue < correctNumber) {
  //     score--;
  //     document.getElementsByClassName("score")[0].textContent = score;
  //     document.getElementsByClassName("message")[0].textContent =
  //       "📉 A lil bit low";
  //   }
});
document.getElementById("again").addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  querySelector(".number", "?");
  querySelector(".score", 20);
  querySelector(",message", "Start guessing...");
  document.getElementById("guess").value = "";
  correctNumber = getRandomInt(20);
});

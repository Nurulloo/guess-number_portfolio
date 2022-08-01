"use strict";

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayNumber = function (message) {
  document.querySelector(".number").textContent = message;
};

const displayScore = function (message) {
  document.querySelector(".score").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//
displayNumber("?");

let score = 20;

let highscore = (document.querySelector(".highscore").textContent = 0);

let high_score = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no input
  if (!guess) {
    displayMessage(" ⛔️ No number");
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    displayNumber(secretNumber);

    if (high_score < score) {
      high_score = score;
      document.querySelector(".highscore").textContent = high_score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " 📈 Too High" : " 📉 Too Low");
      score--;
      displayScore(score);
    } else {
      displayMessage(" 💥 You lost son, go home early");
      displayScore(0);
    }
  }

  // When gues is high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "You lost son, go home early";
  //       document.querySelector(".score").textContent = 0;
  //     }

  //     // When guess is low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too Low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "You lost son, go home early";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  //

  score = 20;

  // Generate new secret number;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);

  displayMessage("Start guessing...");

  displayScore(score);

  displayNumber("?");

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

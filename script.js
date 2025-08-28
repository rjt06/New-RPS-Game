const rockItem = document.querySelector(".rock-item");
const paperItem = document.querySelector(".paper-item");
const scissorsItem = document.querySelector(".scissors-item");
const resultBox = document.querySelector(".result-box");
const userSelectedImg = document.querySelector(".user-selected-img");
const computerSelectedImg = document.querySelector(".computer-selected-img");
const userSelectedItem = document.querySelector(".user-selected-item");
const computerSelectedItem = document.querySelector(".computer-selected-item");
const scoreCountBox = document.querySelector(".score-count-box");
const resetBtn = document.querySelector(".reset-btn");


let yourMove;
let computerMove;
let scoreCount = {
  Win: 0,
  Lose: 0,
  Tie: 0
};

// --------------------------------------------------

rockItem.addEventListener('click', () => {
  yourMove = "Rock";
  getComputerMove();
  calculateWinner();
  printScore();
});

paperItem.addEventListener('click', () => {
  yourMove = "Paper";
  getComputerMove();
  calculateWinner();
  printScore();
});

scissorsItem.addEventListener('click', () => {
  yourMove = "Scissors";
  getComputerMove();
  calculateWinner();
  printScore();
});

resetBtn.addEventListener('click', ()=> {
  scoreCount.Win = 0;
  scoreCount.Lose = 0;
  scoreCount.Tie = 0;
  printScore();
});

//---------------------------------------------------


function calculateWinner() {
  if (yourMove === "Rock") {
    userSelectedImg.src = "rock.png";
    userSelectedItem.innerHTML = "Rock";
    if (computerMove === "Rock") {
      resultBox.innerHTML = "Tie"
      scoreCount.Tie += 1;
    } else if (computerMove === "Paper") {
      resultBox.innerHTML = "You Lose"
      scoreCount.Lose +=1;
    } else if (computerMove === "Scissors") {
      resultBox.innerHTML = "You Won"
      scoreCount.Win +=1;
    }
  } else if (yourMove === "Paper") {
    userSelectedImg.src = "paper.png";
    userSelectedItem.innerHTML = "Paper";
    if (computerMove === "Rock") {
      resultBox.innerHTML = "You Won"
      scoreCount.Win +=1;
    } else if (computerMove === "Paper") {
      resultBox.innerHTML = "Tie"
      scoreCount.Tie += 1;
    } else if (computerMove === "Scissors") {
      resultBox.innerHTML = "You Lose"
      scoreCount.Lose +=1;
    }
  } else if (yourMove === "Scissors") {
    userSelectedImg.src = "scissors.png";
    userSelectedItem.innerHTML = "Scissors";
    if (computerMove === "Rock") {
      resultBox.innerHTML = "You Lose"
      scoreCount.Lose +=1;
    } else if (computerMove === "Paper") {
      resultBox.innerHTML = "You Won"
      scoreCount.Win +=1;
    } else if (computerMove === "Scissors") {
      resultBox.innerHTML = "Tie"
      scoreCount.Tie += 1;
    }
  }
}


function getComputerMove() {
  random = Math.random();
  if (random > 0 && random <= 0.33) {
    computerMove = "Rock";
    computerSelectedImg.src = "rock.png";
    computerSelectedItem.innerHTML = "Rock";
  } else if (random > 0.33 && random <= 0.66) {
    computerMove = "Paper";
    computerSelectedImg.src = "paper.png";
    computerSelectedItem.innerHTML = "Paper";
  } else if (random > 0.66 && random <= 1) {
    computerSelectedImg.src = "Scissors.png";
    computerSelectedItem.innerHTML = "Scissors";
    computerMove = "Scissors";
  }
}


function printScore() {
  scoreCountBox.innerHTML = `Your Wins: ${scoreCount.Win}
  Loses: ${scoreCount.Lose}
  Ties: ${scoreCount.Tie}`
}
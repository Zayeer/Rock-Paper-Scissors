const container = document.querySelector(".container");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choices = Array.from(document.querySelectorAll(".choice"));
const result = document.querySelector("#result");
let options = [rock, paper, scissors];
let compOption;
let round = document.querySelector("#round");
let userPoints = document.querySelector("#user-points");
let computerPoints = document.querySelector("#computer-points");
let restart = document.querySelector("#restart");

const count = function () {
  return parseInt(round.innerText);
};

/*computer selects random option*/
const computerPlay = function () {
  return options[Math.floor(Math.random() * options.length)];
};

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", (event) => {
    gamePlay(event);
    event.stopImmediatePropagation();
  });
}

const winningOptions = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

const losingOptions = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

function gamePlay(e) {
  const userOption = e.currentTarget.getAttribute("id");
  e.currentTarget.style.setProperty("box-shadow", "2px 5px grey");
  compOption = computerPlay().getAttribute("id");
  round.innerText = parseInt(round.innerText) + 1;
  if (losingOptions[userOption] === compOption) {
    computerPoints.innerText = parseInt(computerPoints.innerHTML) + 1;
    setTimeout(function () {
      result.innerText = `Comp got a point! ${
        compOption[0].toUpperCase() + compOption.slice(1)
      } beats ${userOption[0].toUpperCase() + userOption.slice(1)}`;
    }, 500);
  } else if (winningOptions[userOption] === compOption) {
    userPoints.innerText = parseInt(userPoints.innerText) + 1;
    setTimeout(function () {
      result.innerText = `You got a point! ${
        userOption[0].toUpperCase() + userOption.slice(1)
      } beats ${compOption[0].toUpperCase() + compOption.slice(1)}`;
    }, 500);
  } else {
    setTimeout(function () {
      round.innerText = parseInt(round.innerText) - 1;
      result.innerText = "Computer opted the same";
    }, 500);
  }

  setTimeout(() => {
    if (parseInt(round.innerText) >= 5) endOfTheGame();
  }, 600);
}

/*function to end the game after total 5 rounds completed along with displaying "try again/play again" button*/
const endOfTheGame = () => {
  choices.forEach((choice) => {
    choice.style.cssText = "outline: none";
    choice.removeEventListener("click", gamePlay);
    choice.disabled = true;
  });

  gameResult(
    parseInt(userPoints.innerText),
    parseInt(computerPoints.innerText)
  );

  setTimeout(function () {
    restart.style.display = "block";
  }, 4000);
};

function gameResult(uPoints, cPoints) {
  setTimeout(function () {
    result.innerHTML = "GAME OVER!";
  }, 1000);

  if (uPoints > cPoints) {
    setTimeout(function () {
      result.innerHTML = "YOU WON!";
    }, 2000);
    restart.innerHTML = "Play Again";
  } else if (cPoints > uPoints) {
    setTimeout(function () {
      result.innerHTML = "YOU LOSE!";
    }, 2000);
    restart.innerHTML = "Try Again";
  } else {
    setInterval(function () {
      result.innerHTML = "IT'S A TIE!";
    }, 2000);
    restart.innerHTML = "Try Again";
  }
}

/*below code executes when we click on "try again/play again" button*/
restart.addEventListener("click", function () {
  restart.style.display = "none";
  round.innerHTML = "0";
  userPoints.innerHTML = "0";
  computerPoints.innerHTML = "0";
  choices.forEach((choice) => {
    choice.disabled = false;
    choice.addEventListener("click", () => {
      gamePlay(event);
      event.stopImmediatePropagation();
    });
  });
  result.innerHTML = "";
});

/*button outline property depending on the events*/

choices.forEach((choice) => {
  choice.addEventListener("mouseout", () => {
    choice.style.cssText = "outline: none";
  });
});

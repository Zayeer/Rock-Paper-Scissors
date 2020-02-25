var container = document.querySelector(".container");
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var result = document.querySelector('#result');
var options = [rock, paper, scissors];
var compOption;
var round = document.querySelector('#round');
var userPoints = document.querySelector("#user-points");
var computerPoints = document.querySelector("#computer-points");
var restart = document.querySelector("#restart")
var clickSound = document.querySelector("#click-sound");
/*computer selects random option*/
var computerPlay = function () {
	compOption = options[Math.floor(Math.random() * options.length)];
	return compOption;
};


/*below code executes when we click on "rock" button*/
rock.addEventListener("click", function () {
	clickSound.play();
	computerPlay();
	if (compOption === rock) {
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Computer opted the same";
		}, 500);
	}

	else if (compOption === paper) {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Comp won! Paper beats Rock";
		}, 500);
	}

	else {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "You won! Rock beats Scissors";
		}, 500);
	}

	endOfTheGame();
});

/*below code executes when we click on "paper" button*/

paper.addEventListener("click", function () {
	clickSound.play();
	computerPlay();
	if (compOption === rock) {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "You won! Paper beats Rock";
		}, 500);

	}

	else if (compOption === paper) {
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Comp opted the same";
		}, 500);
	}

	else {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Comp won! Scissors beats Paper";
		}, 500);
	}

	endOfTheGame();
});

/*below code executes when we click on "scissors" button*/
scissors.addEventListener("click", function () {
	clickSound.play();
	computerPlay();
	if (compOption === rock) {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Comp won! Rock beats Scissors";
		}, 500);
	}

	else if (compOption === paper) {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "You won! Scissors beats Paper";
		}, 500);
	}

	else {
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Comp opted the same";
		}, 500)
	}
	endOfTheGame();
});

/*function to end the game after total 5 rounds completed along with displaying "try again/play again" button*/
function endOfTheGame() {
	if (round.innerHTML >= "5") {
		optionButtons.forEach(x => {
			x.style.cssText = "outline: none";
		});
		document.getElementById('rock').disabled = true;
		document.getElementById('paper').disabled = true;
		document.getElementById('scissors').disabled = true;
		if (computerPoints.innerHTML > userPoints.innerHTML) {
			var roundsTimerId = setTimeout(function () {
				result.innerHTML = "GAME OVER!"
			}, 3000);

			var resultTimerId = setTimeout(function () {
				result.innerHTML = "You Lose!";
			}, 5000);

			restart.innerHTML = "Try Again";
		}
		else if (computerPoints.innerHTML < userPoints.innerHTML) {
			var roundsTimerId = setTimeout(function () {
				result.innerHTML = "Game is over!"
			}, 3000);
			var resultTimerId = setTimeout(function () {
				result.innerHTML = "You won!";
			}, 5000);
			restart.innerHTML = "Play Again";
		}
		else {
			var roundsTimerId = setTimeout(function () {
				result.innerHTML = "Game is over!"
			}, 3000);
			var resultTimerId = setInterval(function () {
				result.innerHTML = "It's a tie";
			}, 5000);
			restart.innerHTML = "Play Again";
		}

		var restartTimerId = setTimeout(function () {
			restart.style.display = "";
		}, 8000);
	}
}

/*below code executes when we click on "try again/play again" button*/
restart.addEventListener("click", function () {
	restart.style.display = "none";
	round.innerHTML = "0";
	userPoints.innerHTML = "0";
	computerPoints.innerHTML = "0";
	document.getElementById('rock').disabled = false;
	document.getElementById('paper').disabled = false;
	document.getElementById('scissors').disabled = false;
	result.innerHTML = "";
});

/*button outline property depending on the events*/
var optionButtons = document.querySelectorAll("div.options button");
optionButtons.forEach(x => {
	if (round.innerHTML >= "5") {
		x.addEventListener("mouseover", () => {
			x.style.cssText = "outline: none";
		});
	}
	else {
		x.addEventListener("mouseover", () => {
			x.style.cssText = "outline: 1px solid #FF0000";
		});
	}
});

optionButtons.forEach(x => {
	x.addEventListener("mouseout", () => {
		x.style.cssText = "outline: none";
	});
});

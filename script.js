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
			result.innerHTML = "Oops...computer too selected rock";
		}, 500);
	}

	else if (compOption === paper) {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "computer selected paper and earns a point";
		}, 500);
	}

	else {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "computer selected scissors. You earned a point";
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
			result.innerHTML = "Computer selected rock. You earned a point";
		}, 500);

	}

	else if (compOption === paper) {
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Oops...computer too selected the paper";
		}, 500);
	}

	else {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		computerPoints.innerHTML = parseInt(computerPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "computer selected the scissors and earns a point";
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
			result.innerHTML = "computer selected rock and earns a point";
		}, 500);
	}

	else if (compOption === paper) {
		round.innerHTML = parseInt(round.innerHTML) + 1;
		userPoints.innerHTML = parseInt(userPoints.innerHTML) + 1;
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Computer selected paper. You earned a point";
		}, 500);
	}

	else {
		var resultTimerId = setTimeout(function () {
			result.innerHTML = "Oops... computer too selected scissors";
		}, 500)
	}
	endOfTheGame();
});

/*function to end the game after total 5 rounds completed along with displaying "try again/play again" button*/
function endOfTheGame() {
	if (round.innerHTML >= "5") {
		document.getElementById('rock').disabled = true;
		document.getElementById('paper').disabled = true;
		document.getElementById('scissors').disabled = true;
		clickSound.pause();
		if (computerPoints.innerHTML > userPoints.innerHTML) {
			var roundsTimerId = setTimeout(function () {
				result.innerHTML = "GAME OVER!"
			}, 3000);

			var resultTimerId = setTimeout(function () {
				result.innerHTML = "You Lost!";
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
		}
		else {
			var roundsTimerId = setTimeout(function () {
				result.innerHTML = "Game is over!"
			}, 3000);
			var resultTimerId = setInterval(function () {
				result.innerHTML = "It's a tie";
			}, 5000);
		}

		var restartTimerId = setTimeout(function () {
			restart.style.display = "block";
		}, 8000);
	}
}

/*below code executes when we click on "try again/play again" button*/
restart.addEventListener("click", function () {
	clickSound.play();
	restart.style.display = "none";
	round.innerHTML = "0";
	userPoints.innerHTML = "0";
	computerPoints.innerHTML = "0";
	document.getElementById('rock').disabled = false;
	document.getElementById('paper').disabled = false;
	document.getElementById('scissors').disabled = false;
	result.innerHTML = "";
});
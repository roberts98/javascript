const squares = document.querySelectorAll(".square");
const status = document.querySelector("#status");
const newGame = document.querySelector("#newGame");
const pl1 = document.querySelector("#pl1");
const pl2 = document.querySelector("#pl2");
const curr = document.querySelector("#currentPlayer");
const turn = document.querySelector(".img");

let p1SquareValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let p2SquareValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let gameOver = false;
let turnPl1 = true;
let sump1 = 0;
let sump2 = 0;
let p1wins = p2wins = 0;

for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function () {
		if (turnPl1 === true && gameOver === false && !(p1SquareValues[i]) && !(p2SquareValues[i])) {
			turnPl1 = false;
			p1SquareValues[i] = 1;
			sump1++;
			this.classList.add("red");
			gameOver = isGameOver(p1SquareValues);
			if (gameOver === true) {
				status.textContent = "Player 1 Won!!!";
				currentPlayer.style.display = "none";
				p1wins++;
				pl1.textContent = " " + p1wins;
			}	
			isTie(p1SquareValues);
			whosTurn(turnPl1);			
		}
		else if (turnPl1 === false && gameOver === false && !(p2SquareValues[i]) && !(p1SquareValues[i])) {
			turnPl1 = true;
			p2SquareValues[i] = 1;
			sump2++;
			this.classList.add("yellow");
			gameOver = isGameOver(p2SquareValues);
			if (gameOver === true) {
				status.textContent = "Player 2 Won!!!";
				currentPlayer.style.display = "none";
				p2wins++;
				pl2.textContent = p2wins + " ";
			}		
			isTie(p2SquareValues);
			whosTurn(turnPl1);
		}
	})
}

newGame.addEventListener("click", function() {
	currentPlayer.style.display = "block";
	turnPl1 = true;
	p1SquareValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	p2SquareValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	sump1 = sump2 = 0;
	for (let i = 0; i < squares.length; i++) {
		squares[i].classList.remove("red");
		squares[i].classList.remove("yellow");
	}
	gameOver = false;
	status.textContent = "";
	whosTurn(turnPl1);
	turnPl1 = true;
})

function isGameOver (arr) {
	gameOver = false;
	if ((arr[0] && arr[1] && arr[2]) || (arr[0] && arr[3] && arr[6]) || (arr[0] && arr[4] && arr[8]) || (arr[2] && arr[5] && arr[8]) || (arr[3] && arr[4] && arr[5]) || (arr[6] && arr[7] && arr[8]) || (arr[2] && arr[4] && arr[6]) || (arr[1] && arr[4] && arr[7])) {
		gameOver = true;
	}
	return gameOver;
}


function isTie (arr) {
	if ((sump1 + sump2 > 8) && isGameOver(arr) === false) {
		status.textContent = "TIE!!!";
		gameOver = true;
		currentPlayer.style.display = "none";
	}
}

function whosTurn (p1) {
	if (p1 === true) {
		turn.setAttribute("src", "krzyzyk.png");
	}
	else {
		turn.setAttribute("src", "kolko.png");
	}
}
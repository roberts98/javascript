let makeGuess = function(guess) {
    let number = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    return guess === number;
}

console.log(makeGuess(5));
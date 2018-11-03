var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var userGuessChoice = [];
var computerGuessChoice = [];


window.onload = function () {
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    computerGuessChoice.push(computerGuess.toLowerCase());
    //console.log(computerGuess);



    document.onkeyup = function (event) {
        var userGuess = event.key;
        userGuessChoice.push(userGuess.toLowerCase());
        //console.log(userGuessChoice);

        if (userGuessChoice == computerGuess) {
            wins++;
            guesses = 9;
            userGuessChoice = [];
            computerGuessChoice = [];
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            computerGuessChoice.push(computerGuess.toLowerCase());
            //console.log(computerGuess);
        } if (userGuessChoice != computerGuess) {
            guesses--;
        } if (guesses === 0) {
            guesses = 9;
            losses++;
            userGuessChoice = [];
            computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            computerGuessChoice.push(computerGuess.toLowerCase());
            //console.log(computerGuess);

        } else;

        //console.log(guesses);
        document.getElementById("wins-text").innerHTML ="Wins : " + wins;
        document.getElementById("losses-text").innerHTML = "Losses : " + losses;
        document.getElementById("guessesLeft-text").innerHTML = "Guesses Left : " + guesses;
        document.getElementById("currentGuesses-text").innerHTML = 'Current Guesses : ' + userGuessChoice;

    }
};


var letter = "abcdefghijklmnopqrstuvwxyz";

var wins = 0;
var losses = 0;
var tries = 9;
var guesses = "";

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

var computerGuess = random(letter);

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    
    if (userGuess === computerGuess) {
        ++wins;
        guesses = '';
        userGuess = '';
        tries = 9;
        computerGuess = random(letter);
    } else {
        --tries;
    }

    if (tries <= 0) {
        ++losses;
        guesses = '';
        userGuess = '';
        tries = 9;
        computerGuess = random(letter);
    }

    var winsText = document.getElementById("wins");
    winsText.textContent = wins;

    var lossesText = document.getElementById("losses");
    lossesText.textContent = losses;

    if (guesses.length > 0) {
        guesses += ', ';
    }

    guesses += userGuess;

    var userGuessesText = document.getElementById("guesses");
    userGuessesText.textContent = guesses;

    var triesText = document.getElementById("tries");
    triesText.textContent = tries;
};
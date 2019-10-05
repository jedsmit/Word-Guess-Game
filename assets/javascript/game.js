//possible words
var words = ["word", "words", "stuff", "things", "this", "that"];
//variables
var secretWord = "";
var letterSpaces = $("#secret-word");
var usedLetters = $("#already-guessed");
var guessesLeft = $("#guesses-left");
var userGuess = "";
var guessArray = [];
var numGuessLeft = 10;
var usedArray = [];
var wins = $("#wins");
var losses = $("#losses");
var numWins = 0;
var numLosses = 0;
var correctGuesses = 0;

//randomly chooses word
function generateWord(array) {
    return array[Math.floor(Math.random() * array.length)];
};

//updates stats
function updateStats() {
    usedLetters.text("Already guessed: " + usedArray);
    guessesLeft.text("Number of guesses left: " + numGuessLeft);
    wins.text(numWins);
    losses.text(numLosses);
};

//-----------------------------------main game-------------------------------------
document.onkeyup = function (event) {
    secretWord = generateWord(words);
    console.log(secretWord);

    //counts letters in random word and makes underscores
    for (i = 0; i < secretWord.length; i++) {
        var blanks = "_";
        guessArray.push(blanks);
    }
    //displays underscores on page 
    letterSpaces.text((guessArray).join(" "));

    //displays stats
    updateStats();

    //get letter guess from user
    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();
        console.log(userGuess);
        numGuessLeft--;
        updateStats();
        //compare user guess to each letter in the secret word
        //if matched replace underscore with letter, 
        if (secretWord.includes(userGuess)) {
            var index = secretWord.indexOf(userGuess);
            guessArray[index] = userGuess;
            letterSpaces.text((guessArray).join(" "));
            correctGuesses++;
            updateStats();
            if (correctGuesses === secretWord.length) {
                wins++;
                updateStats();
                alert("You won!s Want to try again?");
            }
        } else {
            //if no match, decrement guesses left, add letter to used array
            usedArray.push(userGuess);
            usedLetters.text("Already guessed: " + usedArray.join(" "));
            if (numGuessLeft === 0) {
                numLosses++;
                updateStats();
                alert("You lost. Want to try again?");
            }

        }

    };
};












console.log(secretWord.length)
//possible words
var words = ["word", "words", "stuff", "things", "this", "that"];
//
var secretWord = generateWord(words);
var underscore = ["_ "];
var spaces = $("#secret-word");
var usedLetters = $("#already-guessed")
//randomly chooses word
function generateWord(array) {
    return array[Math.floor(Math.random() * array.length)];
};
//counts letters in random word and makes underscores

for (i = 0; i < secretWord.length - 1; i++) {
    var blanks = "_ ";
    underscore = underscore + blanks;

}
console.log(underscore);
//displays underscores on page

//$(.text()





console.log(secretWord.length);
// ====================================================
// ||                                                ||
// || JavaScript Homework - Word Guess Game          ||
// ||                                                ||
// || Tecnológico de Monterrey Coding Boot Camp 2018 ||
// ||                                                ||
// || Alberto Barroso                                ||
// ||                                                ||
// ====================================================

// ========================================================
// Welcome Modal
// ========================================================

var modal = document.getElementById('insModal');
var span = document.getElementsByClassName("close")[0];

// Open modal on load 
window.onload = function() 
{
    modal.style.display = "block";
};

// Close modal on button click
span.onclick = function() 
{
modal.style.display = "none";
};

// Close modal when clicking outside box
window.onclick = function(event) 
{
    if (event.target == modal) {
    modal.style.display = "none";
    }
};

// When enter key is pressed close the modal
window.onkeydown = function(event) 
{
    if (event.which == 13 || event.keyCode == 13){
    modal.style.display = "none";
    }
};

// ========================================================
// Stats Variables
// ========================================================

var lost = 0;
var won = 0;
var errorLimit = 12;

// ========================================================
// Reference Variables
// ========================================================

var life = document.getElementById("livesLeft");
var frameImage = document.getElementById("rectFrameImg");
var uLetters1 = document.getElementById("lineOne");
var wGames = document.getElementById("winNumber");
var lGames = document.getElementById("loseNumber");
var wordLetters = document.getElementById("blankWord");
var notification = document.getElementById("gameResult");
var notificationB = document.getElementById("gameResultB");

// ========================================================
// Notification Variables
// ========================================================

var youWon = "You are safe... For now...";
var continueGame = "Press enter to continue";
var youLost = "Hela has your soul...";
var retryGame = "Press enter to try again";
var blankNot = "";

// ========================================================
// Arrays
// ========================================================

// Valid Letters Array
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Used Letters Array
// var usedLetters = [];

// Word Array
var wordArray = ["aegir", "aesir", "alfheim", "asgard", "balder", "bifrost", "bolverk", "bor", "bragi", "buri", "einherjar", "eir", "fjorgyn", 
"forseti", "freyja", "freyr", "frigga", "gefion", "gullveig", "harbard", "heimdall", "hel", "helheim", "hod", "honir", "idun", 
"jotunheim", "kvasir", "lofn", "loki", "magni", "midgard", "mimir", "modi", "narvi", "niflheim", "njord", "odin", "ran", "sif", 
"sigyn", "sjofn", "skadi", "thor", "tyr", "vali", "valhalla", "valkyries", "vanaheim", "vanir", "ve", "vili", "yggdrasill"]

// ========================================================
// Start Game
// ========================================================

var startGame = new game();

// ========================================================
// Listen For Key Input
// ========================================================

document.onkeyup = function(event)
{
    // Sets the pressed key to playerGuess variable
    var playerGuess = event.key.toLowerCase();

    // Checks for game over
    if (!startGame.gameOver) {
        // Checks if character is in validLetters Array and if it has been used
        if (validLetters.includes(playerGuess) && !startGame.usedLetters.includes(playerGuess)) {
            // Sends the variable to review
            startGame.playerGuessReview(playerGuess);
        }
    }
    else {
        // Starts a new game when enter key is pressed
        if (event.which == 13 || event.keyCode == 13) {
            startGame = new game();
            startGame.refreshAll();
            notification.textContent = blankNot;
            notificationB.textContent = blankNot;
        }
    }
}

// ========================================================
// Game Object
// ========================================================

function game() 
{
    // Word Array
    this.array = wordArray
    // Choose Random Word From Array
    this.randomWord = this.array[Math.floor(Math.random() * wordArray.length)];
    console.log("Random word = " + this.randomWord);
    // Array of correct letters pressed
    this.correctLetters = [];
    // Number of errors
    this.errors = 0;
    // Array of used letters
    this.usedLetters = [];
    // Array of incorrect used letters
    this.usedErrorLetters = [];
    // Used letters reference
    this.uLetters1= "";
    // Game Over
    this.gameOver = false;
    // for Loop random word vs letters
    for (var i = 0; i < this.randomWord.length; i++) {
        this.correctLetters[i] = (false);
    }
}

// ========================================================
// Review Player Guess
// ========================================================

game.prototype.playerGuessReview = function (pLetter) 
{
    // Push pressed key to usedLetter Array
    this.usedLetters.push(pLetter);

    var correctGuess = false;

    // If letter guess is in random word, 
    for (var i = 0; i < this.randomWord.length; i++) {
        if (this.randomWord.charAt(i) === pLetter) {
            correctGuess = true;
            this.correctLetters[i] = true;
        }
    }
    
    // If guess is incorrect, add to errors
    if (!correctGuess) {
        this.errors++;
        this.usedErrorLetters.push(pLetter);
    }

    // If error limit is exceeded, end game, add to losses and notifify
    if (this.errors >= errorLimit) {
        lost++;
        notification.textContent = youLost;
        notificationB.textContent = retryGame;
        this.gameOver = true;
    }

    // If all letters are guessed correctly, end game, add to wins and notify
    if (!this.correctLetters.includes(false)) {
        won++;
        notification.textContent = youWon;
        notificationB.textContent = continueGame;
        this.gameOver = true;
    }

    startGame.refreshAll();

};

// ========================================================
// Refresh Values
// ========================================================

game.prototype.refreshAll = function ()
{
    
    // Used Letters
    var tempTxt = "";
    for (var i = 0; i < this.usedErrorLetters.length; i++) {
        tempTxt += (this.usedErrorLetters[i]);
        if (i < (this.usedErrorLetters.length -1)) tempTxt += " ";
    }
    for (var i = tempTxt.length; i < 1; i++) {
        tempTxt += " ";
    } 
    
    uLetters1.textContent = tempTxt;
    
    // Correct Letters
    var tempTxt = "";
    for (var i = 0; i < this.correctLetters.length; i++) {
        tempTxt += ((this.correctLetters[i] || this.gameOver) ? this.randomWord.charAt(i).toUpperCase() : "_");
        if (i < (this.correctLetters.length -1)) tempTxt += " ";
    }

    wordLetters.textContent = tempTxt;

    // Error Counter
    tempTxt = errorLimit - this.errors;
    for (var i = tempTxt.length; i < 50; i++) {
        tempTxt += " "; 
    }
    life.textContent = tempTxt;
    var frameNumber = this.errors;

    // Win Counter
    tempTxt = won + "";
    for (var i = tempTxt.length; i < 50; i++) {
        tempTxt += " ";
    }
    wGames.textContent = tempTxt;

    // Lose Counter
    tempTxt = lost + "";
    for (var i = tempTxt.length; i < 50; i++) {
        tempTxt += " ";
    }
    lGames.textContent = tempTxt;

    // Frames
    frameImage.src = "assets/images/svg/frame" + frameNumber + ".svg";
}

startGame.refreshAll();
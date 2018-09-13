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
// Info Modal
// ========================================================

var modal = document.getElementById('insModal');
var span = document.getElementsByClassName("close")[0];

// Open modal when game ends 
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
var infoTitleTxt = document.getElementById("infoTitle");
var infoTxtContent = document.getElementById("infoTxt");

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
"sigyn", "sjofn", "skadi", "thor", "tyr", "vali", "valhalla", "valkyries", "vanaheim", "vanir", "ve", "vili", "yggdrasill"];

// Info Array
var infoArray = 
[
    "Norse God of the sea. Married to Ran and lives under the waves near the island of Hlesey",
    "A group of warrior gods led by Odin who inhabit Asgard",
    "The land of the light elves in Asgard",
    "Land of the Aesir",
    "Son of Odin and Frigg. Known as a gentle and wise god. Killed accidentally by his brother Hod. Will return after Ragnarok",
    "The flaming rainbow bridge between Asgard and Midgard",
    "The alias Odin adopted when disguised as a giant to win the mead of poetry",
    "Son of Buri and father of Odin, Vili and Ve",
    "The Norse God of poetry and eloquence. Son of Odin and husband of Idun",
    "Ancestor of the Norse gods. Created by the cow Audmula licking him from ice",
    "Band of dead warriors in Valhalla who await Ragnarok",
    "Goddess of healing",
    "Lover of Odin and mother of Thor. Also referred to as Earth",
    "God of Justice. Son of Balder and Nanna",
    "Main goddess of the Vanir (fertility gods). Daughter of Njord and sister of Freyr",
    "Important god of the Vanir. Son of Njord and brother of Freyja",
    "Main goddess. Wife of Odin and mother of Balder",
    "Fertility goddess. Associated with the plow. Tricked the king of Sweden out of a tract of his land",
    "A Vanir goddess (probably Freyja) who is burned three times by the Aesir",
    "Odin disguised as a ferryman when he wrangles with Thor",
    "Watchman of the Norse gods and owner of the horn Gjall. Son of nine mothers. Often identified with Rig, the creator of three races of men",
    "Ruler of Helheim, the realm of the dead",
    "The realm of the dead in Niflheim, ruled over by the monster Hel",
    "Son of Odin. A blind god who accidentally killed his brother Balder. he will return after Ragnarok",
    "A long-legged, indecisive god. Sent to the Vanir to seal the truce between them and the Aesir. He will survive Ragnarok",
    "Guardian of the golden apples of youth and wife of Bragi",
    "Land of the giants",
    "The wisest. Created from the spittle of the gods",
    "Goddess of ilicit unions",
    "The sly, trickster of the Norse gods. Son of two giants. Also known as the Sly One, the Trickster, the Shape Changer and the Sky Traveller. Becomes increasingly more evil. He is responsible for the death of Balder. Bound until Ragnarok",
    "Son of Thor and the giantess Jarnsaxa. Will inherit Thor’s hammer Mjollnir with his brother Modi after Ragnarok",
    "The realm of mankind",
    "Wise Aesir god. Sent to the Vanir to seal the truce between the two groups of the Norse gods. Killed by the Vanir, his head is kept by Odin",
    "Son of Thor and the giantess Jarnsaxa. Will inherit Thor’s hammer Mjollnir with his brother Magni after Ragnarok",
    "Also known as Nari. Son of Loki and Sigyn who was killed by his brother Vali",
    "Land of freezing mist and darkness and home of Hel",
    "A Vanir god associated with wind and sea. Husband of Skadi and father of Freyja and Freyr",
    "King of the Norse Gods, God of poetry, battle and death. Chief god of the Aesir. Also known as the 'all-father', the 'terrible one', 'one-eyed' and 'father of battle'",
    "Wife of Aegir who dragged drowning men down with her net",
    "Wife of Thor whose golden hair was cut off by Loki",
    "Wife of Loki",
    "Goddess of human passion",
    "Goddess of Winter and of the Hunt",
    "God of Sky, thunder and fertility. Associated with law and order in Asgard and guardian of the Norse gods. Son of Odin and Earth and husband of Sif. Also known as the 'thunder god' and 'charioteer'",
    "War god. Son of Odin who sacrificed his hand in the binding of Fenrir",
    "Son of Odin and the giantess Rind. Conceived to avenge the death of Balder",
    "Hall presided over by Odin where the Einherjar await Ragnarok",
    "Beautiful women who carried dying warriors to Valhalla",
    "Land of the Vanir in Asgard",
    "Fertility gods",
    "Son of Bor and brother of Odin and Vili",
    "Son of Bor and brother of Odin and Ve",
    "The world tree"
];

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
            document.getElementById("infoPanel").style.visibility = "hidden";
        }
    }
}

// ========================================================
// Game Function
// ========================================================

function game() 
{
    // Word Array
    this.array = wordArray;
    // Choose Random Word From Array
    this.randomWord = this.array[Math.floor(Math.random() * wordArray.length)];
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

    // Show Info Panel on GameOver
    if (this.gameOver === true) {
        document.getElementById("infoPanel").style.visibility = "visible";
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

    // Info Text Refresh
    infoTitleTxt.textContent = this.randomWord;
    infoTxtContent.textContent = infoArray[this.array.indexOf(this.randomWord)];

}

startGame.refreshAll();
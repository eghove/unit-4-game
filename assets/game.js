$(document).ready(function() { //wrapping all of this in this onready function
//======DECLARING GLOBAL VARIABLES======================
//creating winsTotal variable
let winsTotal = 0;

//creating lossesTotal variable
let lossesTotal= 0;

//creating variables for button values
let button1 = 0;
let button2 = 0;
let button3 = 0;
let button4 = 0;


//creating variable for userScore
let userScore=0;

//======DECLARING GLOBAL FUNCTIONS======================

//function that generates a random number between a min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); //needs to be one less. i.e. if I want it to stop at 120, need to set max at 121
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

//fuction setting the goalScore to a random integer 19 thru 120
function setGoalScore() {
    goalScore=getRandomInt(19,121);
    $( '#computerNumber').text(goalScore); // prints the goalscore to the page
}


//function the sets the value of the buttons
function setButtons() {
    button1=getRandomInt(1,13);
    button2=getRandomInt(1,13);
    button3=getRandomInt(1,13);
    button4=getRandomInt(1,13);
}

//prints the user Score to the screen
function printUserScore () {
    $( '#userScore').text(userScore);
}

//prints the Score Board to the screen
function printScoreBoard () {
    $( '#totalWins' ).text("Wins: " + winsTotal );
    $( '#totalLosses' ).text("Losses: " + lossesTotal );
}

//resets the game when needed
function initializeGame () {
    setGoalScore();
    setButtons();
    userScore=0;
    printUserScore();
    printScoreBoard();  
}


//checks if the user has yet won or lost the game. Iterates if so, and resets the game
function checkifWon() {
    if (userScore > goalScore) {
        lossesTotal++;
        initializeGame();
    } else if (userScore===goalScore) {
        winsTotal++;
        initializeGame();
    }
}

//--------GAME PLAY----------------------
initializeGame();

//the onclick listeners for the bottons
//for button1
$( '#button1').on("click", function(){
    userScore+=button1;
    printUserScore();
    checkifWon();
})

//for button2
$( '#button2').on("click", function(){
    userScore+=button2;
    printUserScore();
    checkifWon();
})

//for button3
$( '#button3').on("click", function(){
    userScore+=button3;
    printUserScore();
    checkifWon();
})

//for button4
$( '#button4').on("click", function(){
    userScore+=button4;
    printUserScore();
    checkifWon();
})

}) //end of the onready function wrap
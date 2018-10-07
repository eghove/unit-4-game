$(document).ready(function() { //wrapping in all in this onready function
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



//function that adds button values to userScore; this doesn't work correctly
function scoreAdder(x) {
    userScore = userScore + x;
    console.log(userScore);
}

//function the sets the value of the buttons
function setButtons() {
    button1=getRandomInt(1,13);
    console.log("Button 1:" + button1); //for debugging purposes
    button2=getRandomInt(1,13);
    console.log("Button 2:" + button2); //for debugging purposes
    button3=getRandomInt(1,13);
    console.log("Button 3:" + button3); //for debugging purposes
    button4=getRandomInt(1,13);
    console.log("Button 4:" + button4); //for debugging purposes
}
//resets the game when needed
function initializeGame () {
    setGoalScore();
    setButtons();
}

//GAME PLAY
initializeGame();

//create the onclick listeners for the bottons
//for button1
$( '#button1').on("click", function(){
    alert("You clicked Button1 "+ button1);
})

//for button2
$( '#button2').on("click", function(){
    alert("You clicked Button2 "+ button2);
})

//for button3
$( '#button3').on("click", function(){
    alert("You clicked Button3 "+ button3);
})

//for button4
$( '#button4').on("click", function(){
    alert("You clicked Button4 "+ button4);
})

}) //end of the onready function wrap
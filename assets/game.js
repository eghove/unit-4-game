//======DECLARING GLOBAL VARIABLES======================
//creating winsTotal variable
let winsTotal = 0;

//creating lossesTotal variable
let lossesTotal= 0;

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
}


//==========PLAYING AROUND=====================================
//call setGoalScore
setGoalScore();

//printing the goalScore to the screen
document.getElementById("computerNumber").innerHTML = goalScore; 

//prints winsTotal
document.getElementById("totalWins").innerHTML = "Wins: " + winsTotal;

//prints lossesTotal
document.getElementById("totalLosses").innerHTML = "Losses: " + lossesTotal;
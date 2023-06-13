// My plan is to write out my thought process behind 
// writing script for the rockPaperScissors game. 

// i will need a prompt or an input asking the user to
// select either rock paper or scissors. 

// the computer will then need to spit out its own random choice. 

// establish a winner and let them know who it is. 
console.log('whats good my guy');



const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choice");

let player;
let computer;
let result; 

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();

}));

function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "Rock"){
        return (player == "Paper") ? "You Win!" : "You Lose..."
    }
    else if(computer == "Paper"){
        return (player == "Scissors") ? "You Win!" : "You Lose..."
    }
    else if(computer == "Scissors"){
        return (player == "Rock") ? "You Win!" : "You Lose..."
    }
}

// Best of Five

// Now I need to play a game where I somehow store the results of the 
// last 5 rounds and declare a winner for the best 3 out of 5. 

// I will need-
// - a best of 5 button
// - a list that can change to store the best of 5 game results.
// - the code to run the game lol...

const roundOne = document.querySelector("#roundOne");
const roundTwo = document.querySelector("#roundTwo");
const roundThree = document.querySelector("#roundThree");
const roundFour = document.querySelector("#roundFour");
const roundFive = document.querySelector("#roundFive");

roundOne.textContent = `1. ${checkWinner()}`;
roundTwo.textContent = `2. `;
roundThree.textContent = `3. butt`;
roundFour.textContent = `4. `;
roundFive.textContent = `5. `;

startBtn.forEach(button => button.addEventListener("click", () => {


}));

// the start/ restart button needs to
// - clear the previous results
// - start recording new results in the round 1-5 positions
// - take those 5 values and declare a winner after all 5 rounds have been completed


// i also need a function that will take the original 
// results tab and put that value into the round 1-5 
// places. 

// 1) get result from game 
// 2) if one is empty place result there
// if one is full place result in two
// so on and so forth. 

function storeRound(){
    if (roundOne.textContent.trim() === "") {
        return checkWinner
    }
    

}

// I am realizing how messy this code is, and how off track I have gotten.
// I think I need to STOP, GO BACK, RE-DO the javascript lessons. 

// I will probably abandon this set of code completely 
// and start new with fresh eyes. 

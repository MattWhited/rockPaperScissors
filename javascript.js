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
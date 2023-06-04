// My plan is to write out my thought process behind 
// writing script for the rockPaperScissors game. 

// i will need a prompt or an input asking the user to
// select either rock paper or scissors. 

// the computer will then need to spit out its own random choice. 

// establish a winner and let them know who it is. 
console.log('whats good my guy');

// player makes selection (either rock, paper, or scissors)
// computer makes a RANDOM selection (either rock, paper, or scissors)
// then play the game and give results... 

function getComputerChoice (computerChoice) {

    const randomNumber = Math.floor(Math.random() * 3) + 1
if (randomNumber === 1) {
    computerChoice = 'rock'
}
if (randomNumber === 2) {
    computerChoice = 'scissors'
}
if (randomNumber === 3) {
    computerChoice = 'paper'
}
}


let sign = prompt("rock paper or scissors?");
alert (sign)

const playerText = document.querySelector("#player");
const computerText = document.querySelector("#computer");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choice");

let player;
let computer;
let result; 
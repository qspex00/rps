var yourChoise = '';
var computersChoise = '';
var playerScore = 0;
var computerScore = 0;

function rock() {
    yourChoise = '';
    yourChoise = 'rock';
    console.log(yourChoise);
    computerChoise()
    result()
}
function paper() {
    yourChoise = '';
    yourChoise = 'paper';
    console.log(yourChoise);
    computerChoise()
    result()
}
function scissors() {
    yourChoise = '';
    yourChoise = 'rock';
    console.log(yourChoise);
    computerChoise()
    result()
}

function computerChoise(){
    
    cc = parseInt(Math.random() * 3);
    if (cc == 0){
        computersChoise = '';
        computersChoise = 'rock';
        document.getElementById("rock").style.color = "red";
        document.getElementById("rock").style.transition = "150ms";
        document.getElementById("paper").style.color = "rgba(1, 1, 1, 0.3)";
        document.getElementById("scissors").style.color = "rgba(1, 1, 1, 0.3)";
        console.log(computersChoise)
    }
    if (cc == 1){
        computersChoise = '';
        computersChoise = 'paper';
        document.getElementById("rock").style.color = "rgba(1, 1, 1, 0.3)";
        document.getElementById("paper").style.color = "red";
        document.getElementById("paper").style.transition = "150ms";
        document.getElementById("scissors").style.color = "rgba(1, 1, 1, 0.3)";
        console.log(computersChoise)
    }
    if (cc == 2){
        computersChoise = '';
        computersChoise = 'scissors';
        document.getElementById("rock").style.color = "rgba(1, 1, 1, 0.3)";
        document.getElementById("paper").style.color = "rgba(1, 1, 1, 0.3)";
        document.getElementById("scissors").style.color = "red";
        document.getElementById("scissors").style.transition = "150ms";
        console.log(computersChoise)
    }
}

function result (){
    if (yourChoise == 'rock' & computersChoise == 'rock'){
        console.log("draw")
        document.querySelector(".playerScore").innerText = playerScore
    }
    if (yourChoise == 'rock' & computersChoise == 'paper'){
        console.log("comp wins")
        computerScore = computerScore + 1;
        document.querySelector(".computerScore").innerText = computerScore
    }
    if (yourChoise == 'rock' & computersChoise == 'scissors'){
        console.log("player wins")
        playerScore = playerScore + 1;
        document.querySelector(".playerScore").innerText = playerScore
    }
    if (yourChoise == 'paper' & computersChoise == 'rock'){
        console.log("player wins")
        playerScore = playerScore + 1;
        document.querySelector(".playerScore").innerText = playerScore
    }
    if (yourChoise == 'paper' & computersChoise == 'paper'){
        console.log("draw")
        document.querySelector(".playerScore").innerText = playerScore
    }
    if (yourChoise == 'paper' & computersChoise == 'scissors'){
        console.log("comp wins")
        computerScore = computerScore + 1;
        document.querySelector(".computerScore").innerText = computerScore
    }
    if (yourChoise == 'scissors' & computersChoise == 'rock'){
        console.log("comp wins")
        computerScore = computerScore + 1;
        document.querySelector(".computerScore").innerText = computerScore
    }
    if (yourChoise == 'scissors' & computersChoise == 'paper'){
        console.log("player wins")
        playerScore = playerScore + 1;
        document.querySelector(".playerScore").innerText = playerScore
    }
    if (yourChoise == 'scissors' & computersChoise == 'scissors'){
        console.log("draw")
        document.querySelector(".playerScore").innerText = playerScore
    }
}


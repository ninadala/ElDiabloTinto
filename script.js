//VARIABLES GLOBALEs
let coups = 0;

//EVENEMENTS
let btnNewGame         = document.querySelector('#btnNewGame');
let zonePlayer1        = document.querySelector('#zonePlayer1');
let zonePlayer2        = document.querySelector('#zonePLayer2');
let btnRollPlayer1     = document.querySelector('#btnRollPlayer1');
let btnRollPlayer2     = document.querySelector('#btnRollPlayer2');
let btnHoldPlayer1     = document.querySelector('#btnHoldPlayer1');
let btnHoldPlayer2     = document.querySelector('#btnHoldPlayer2');
let globalScorePlayer1 = document.querySelector('#globalScorePlayer1');
let globalScorePlayer2 = document.querySelector('#globalScorePlayer2');
let roundScorePlayer1  = document.querySelector('#roundScorePlayer1');
let roundScorePlayer2  = document.querySelector('#roundScorePlayer2');
let dice               = document.querySelector('#dice');


//CLASSES

class Player {
    constructor(pseudo) {
        this.pseudo      = pseudo;
        this.roundScore  = 0;
        this.globalScore = 0;
    }

    get informations() {
        return "current" + this.globalScore;
    }

    hold() {
        this.globalScore = this.globalScore + this.roundScore;
        this.roundScore == 0;
    }

    win() {
        if(this.globalScore >= 100) {
            this.globalScore == 0;
            console.log(this.pseudo + " a gagné la partie !");
        }
    }

    roll() {
        let min = 1;
        let max = 7;
        console.log(Math.floor (Math.random() * (max - min)+min));
    }
}

//FONCTIONS

function newGame() {
    var player1 = new Player("player 1");
    var player2 = new Player("player 2");
}

function rollTheDice(player) {
    let essai = player.roll();

    if(essai == 1) {
        player.roundScore = 0;
    }
    else {
        player.roundScore += essai;
        essai == 0;
    }
}

function hold(player) {
    player.globalScore += player.roundScore;
    player.roundScore == 0;
}

function nextPlayer() {
    if(coups%2 == 0) {
        btnRollPlayer1.style.display = 'block';
        btnHoldPlayer1.style.display = 'block';
        btnRollPlayer2.style.display = 'none';
        btnHoldPlayer2.style.display = 'none';
    }
    else {
        btnRollPlayer1.style.display = 'none';
        btnHoldPlayer1.style.display = 'none';
        btnRollPlayer2.style.display = 'block';
        btnHoldPlayer2.style.display = 'block';
    }
}


//PROCHAINS TRUCS A FAIRE
// switch pour le dice
// faire le html



//ALGORITHM

// player 1 roll the dices
// result of the dice add to ROUNDSCORE
// choose if ROLL the dice again or if HOLD
// if ROLL and if the result is 1 => ROUNDSCORE = 0 & change to player 2
// if HOLD => ROUNDSCORE is add to GLOBALSCORE & change to player 2
// if GLOBALSCORE >= 100 => player 1 is the winner


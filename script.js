//AJOUT DES ELEMENTS DU DOM
let btnNewGame         = document.querySelector('#newGame');
let btnRoll            = document.querySelector('#roll');
let btnHold            = document.querySelector('#hold');
let dice               = document.querySelector('#dice');

let namePlayer1        = document.querySelector('#player1');
let roundScorePlayer1  = document.querySelector('#roundScorePlayer1');
let globalScorePlayer1 = document.querySelector('#globalScorePlayer1');
let icon1              = document.querySelector('#icon1');

let namePlayer2        = document.querySelector('#player2');
let roundScorePlayer2  = document.querySelector('#roundScorePlayer2');
let globalScorePlayer2 = document.querySelector('#globalScorePlayer2');
let icon2              = document.querySelector('#icon2');

//INITIALISATION DE LA CLASSE
class Player {
    constructor(pseudo, roundScore, globalScore) {
        this.pseudo = pseudo;
        this.roundScore = 0;
        this.globalScore = 0;
    }

    checkWin() {
        if(this.globalScore >= 100) {
            alert(`${this.pseudo} a gagné la partie !`);
            newGame();
        }
    }
}


//VARIABLES GLOBALES
let currentPlayer = 0;
let player1 = new Player("player 1");
let player2 = new Player("player 2");
icon1.style.display = 'none';
icon2.style.display = 'none';

//FONCTIONS
//fonction NEW GAME
function newGame() {
    player1.roundScore = 0;
    player2.roundScore = 0;
    player1.globalScore = 0;
    player2.globalScore = 0;
    roundScorePlayer1.innerHTML = 0;
    roundScorePlayer2.innerHTML = 0;
    globalScorePlayer1.innerHTML = 0;
    globalScorePlayer2.innerHTML = 0;
    dice.innerHTML = 0;
    currentPlayer = 0;
    icon1.style.display = 'inline';
    icon2.style.display = 'none';
}

//fonction ROLL
function roll() {
    let min = 1;
    let max = 7;
    return(Math.floor (Math.random() * (max - min)+min));
}

//fonction HOLD
function hold(player) {
    player.globalScore += player.roundScore;
    player.roundScore = 0;
    dice.innerHTML = 0;
}

//DEROULÉ DU JEU
btnNewGame.addEventListener('click', newGame);

btnRoll.addEventListener('click', () => {
    let diceRoll = roll();
    dice.innerHTML = diceRoll;

    if(currentPlayer%2 == 0) {
        icon1.style.display = 'inline';
        icon2.style.display = 'none'; 

        if(diceRoll == 1) {
            player1.roundScore == 0;
            roundScorePlayer1.innerHTML = 0;
            currentPlayer ++;
        } else {
            player1.roundScore += diceRoll;
            roundScorePlayer1.innerHTML = player1.roundScore;
            diceRoll == 0;
        }
    }
    else {
        icon2.style.display = 'inline';
        icon1.style.display = 'none';

        if(diceRoll == 1) {
            player2.roundScore == 0;
            roundScorePlayer2.innerHTML = 0;
            currentPlayer ++;
        } else {
            player2.roundScore += diceRoll;
            roundScorePlayer2.innerHTML = player2.roundScore;
            diceRoll == 0;
        }
    }
})

btnHold.addEventListener('click', () => {
    if(currentPlayer%2 == 0) {
        hold(player1);
        globalScorePlayer1.innerHTML = player1.globalScore;
        roundScorePlayer1.innerHTML  = player1.roundScore;
        currentPlayer ++;
        player1.checkWin();
    }
    else {
        hold(player2);
        globalScorePlayer2.innerHTML = player2.globalScore;
        roundScorePlayer2.innerHTML  = player2.roundScore;
        currentPlayer ++;
        player2.checkWin();
    }
})

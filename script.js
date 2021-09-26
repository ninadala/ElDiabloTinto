// PROCHAINE ETAPE
// créer une classe game pour intégrer les querySelector dedans

//AJOUT DES ELEMENTS DU DOM
let btnNewGame         = document.querySelector('#newGame');
let btnRoll            = document.querySelector('#roll');
let btnHold            = document.querySelector('#hold');
let dice               = document.querySelector('#dice');

//INITIALISATION DE LA CLASSE
class Player {
    constructor(pseudo, id, roundScore, globalScore) {
        this.pseudo = pseudo;
        this.id = id;
        this.roundScore = 0;
        this.globalScore = 0;
        this.namePlayer = document.querySelector('#player'+id);
        this.roundScorePlayer = document.querySelector('#roundScorePlayer'+id);
        this.globalScorePlayer = document.querySelector('#globalScorePlayer'+id);
        this.icon = document.querySelector('#icon'+id);
    }

    checkWin() {
        if(this.globalScore >= 100) {
            alert(`${this.pseudo} a gagné la partie !`);
            newGame();
        }
    }

    reset() {
        this.roundScore = 0;
        this.globalScore = 0;
        this.roundScorePlayer.innerHTML = 0;
        this.globalScorePlayer.innerHTML = 0;
    }

    showRoundScore() {
        this.roundScorePlayer.innerHTML = this.roundScore;
    }

    showGlobalScore() {
        this.globalScorePlayer.innerHTML = this.globalScore;
    }
}


//VARIABLES GLOBALES
let currentPlayer = null;
let player1 = new Player("player 1", 1);
let player2 = new Player("player 2", 2);
player1.icon.style.display = 'inline';
player2.icon.style.display = 'none';

//FONCTIONS
//fonction NEW GAME
function newGame() {
    player1.reset();
    player2.reset();
    dice.innerHTML = 0;
    currentPlayer = player1;
    player1.icon.style.display = 'inline';
    player2.icon.style.display = 'none';
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

//fonction PERMUT
function permut() {
    if(currentPlayer == player1) {
        player2.icon.style.display = 'inline';
        player1.icon.style.display = 'none';
        currentPlayer = player2;
    }
    else {
        player1.icon.style.display = 'inline';
        player2.icon.style.display = 'none';
        currentPlayer = player1;
    }
}

//DEROULÉ DU JEU
btnNewGame.addEventListener('click', newGame);

btnRoll.addEventListener('click', () => {
    let diceRoll = roll();
    dice.innerHTML = diceRoll;

    if(diceRoll == 1) {
        currentPlayer.roundScore = 0;
        currentPlayer.roundScorePlayer.innerHTML = 0;
        permut();
    } else {
        currentPlayer.roundScore += diceRoll;
        currentPlayer.showRoundScore();
        diceRoll == 0;
    }
});

btnHold.addEventListener('click', () => {
    hold(currentPlayer);
    currentPlayer.showGlobalScore();
    currentPlayer.showRoundScore();
    currentPlayer.checkWin();
    permut();
})

// PROCHAINE ETAPE
// créer une classe game pour intégrer les querySelector dedans

//AJOUT DES ELEMENTS DU DOM
let btnNewGame         = document.querySelector('#newGame');
let btnRoll            = document.querySelector('#roll');
let btnHold            = document.querySelector('#hold');
let dice               = document.querySelector('#dice');
let diceImg            = document.querySelector('#diceImg');

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
    diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-diamond" viewBox="0 0 16 16"><path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/></svg>';
    dice = 0;
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
        diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16"> <circle cx="8" cy="8" r="1.5"/><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/></svg>';
        currentPlayer.roundScore = 0;
        currentPlayer.roundScorePlayer.innerHTML = 0;
        permut();
    } else {
        switch(diceRoll) {
            case 2 : 
                diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
                break;

            case 3 :
                diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
                break;

            case 4 :
                diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
                break;

            case 5 :
                diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
                break;
                
            case 6 :
                diceImg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16"><path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/><path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
                break;
            }
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

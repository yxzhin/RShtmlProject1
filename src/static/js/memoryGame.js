


const cards = document.querySelectorAll(".MemoryCard");
const scoreText = document.getElementById("scoreText");
const triesText = document.getElementById("triesText");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;
let tries = 10;
let maxScore = cards.length/2;

triesText.innerHTML = `tries: ${tries}`;

function flipCard(){

    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add("flip");

    if(!hasFlippedCard){

        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;

    }

    //second click
    secondCard = this;
    checkIfCardsMatch();

}

function disableCards(){

    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();

    ++score;
    scoreText.innerHTML = `score: ${score}`;
    if(score == maxScore) setTimeout(() => {
        alert("yippeee you win!! your memory skills are unmatchable ✧⁠\\⁠(⁠>⁠o⁠<⁠)⁠ﾉ⁠✧");
    }, 737);

}

function unflipCards(){

    --tries;
    triesText.innerHTML = `tries: ${tries}`;

    lockBoard = true;

    if(tries == 0){

        alert("you run out of tries!! refresh the page and try again, don't give up!! ✧⁠\⁠\(⁠>⁠o⁠<⁠)⁠ﾉ⁠✧");
        return;
        
    }

    setTimeout(() => {

        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        lockBoard = false;

        resetBoard()

    }, 1500);

}

function resetBoard(){

    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

function checkIfCardsMatch(){

    isMatch = firstCard.dataset.character === secondCard.dataset.character;
    isMatch ? disableCards() : unflipCards();

}

(function shuffle(){

    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });

})();

cards.forEach(card => card.addEventListener("click", flipCard));
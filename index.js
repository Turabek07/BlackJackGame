
//i Have completed BlackJackGame
//and i used three functions,objects,arrays,
//return inside of Functions,DOM,TextContent,
// Math objects and some Array Methods

let cards = [];
let hasBlackJack = false;
let isAlive = true;
let sum = 0;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Tim",
    chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ":" + "$" + player.chips
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 11) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum < 20) {
        message = "Do you want to draw another card?"
    }
    else if (sum === 20) {
        message = "whooo You have got BlackJack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the Game"
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log(cards)
        renderGame();
    }
}

let firstCard = 5;
let secondCard = 15;
let cards = [firstCard,secondCard];
let hasBlackJack = false;
let isAlive = true;
let sum = firstCard + secondCard ;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for(let i  = 0; i < cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: " + sum;
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

function newCard(){
    let card = 7;
     sum += card;
     cards.push(card)
     console.log(cards)
     renderGame();
}

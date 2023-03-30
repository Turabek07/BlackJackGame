let firstCard = 5;
let secondCard = 15;
let hasBlackJack = false;
let isAlive = true;
let sum = firstCard + secondCard ;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame(){
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

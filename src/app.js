/* app.js */

import Deck from './deck';
// import { select, listen } from './util';
import './style.css';

const computerCardSlot = document.querySelector('.computer-card-slot');

const computerDeckElement = document.querySelector('.computer-deck');

const text = document.querySelector('.text');

let computerDeck;
let score = 0;

function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards;
}

function cleanBeforeRound() {
  computerCardSlot.innerHTML = '';

  text.innerText = '';

  updateDeckCount();
}

function startGame() {
  computerDeck = new Deck();
  computerDeck.shuffle();
  console.log(computerDeck.cards[0].suit);

  cleanBeforeRound();
}

function flipCards(suit) {
  computerCardSlot.innerHTML = '';

  const computerCard = computerDeck.pop();

  computerCardSlot.appendChild(computerCard.getHTML());

  updateDeckCount();

  if (suit === computerCard.suit) {
    score += 4;
    text.innerText = `You win ${score}`;
  } else {
    score -= 1;
    text.innerText = `Darn you lose ${score}`;
  }
  if (computerDeck.numberOfCards === 0) {
    startGame();
  }
  console.log(computerDeck.cards[0].suit);
}

// const SUITS = ['♠', '♣', '♥', '♦'];

const game = document.querySelector('.new-game');
game.addEventListener('click', () => {
  startGame();
});

const diamonds = document.querySelector('.diamonds');
diamonds.addEventListener('click', () => {
  flipCards('♦');
});

const clubs = document.querySelector('.clubs');
clubs.addEventListener('click', () => {
  flipCards('♣');
});

const hearts = document.querySelector('.hearts');
hearts.addEventListener('click', () => {
  flipCards('♥');
});

const spades = document.querySelector('.spades');
spades.addEventListener('click', () => {
  flipCards('♠');
});

startGame();

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
window.onload = function() {
  let cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cardSimbol = ["♦", "♥", "♠", "♣"];
  let ramdonsimbol = getRandom(cardSimbol);
  let color = "black";
  if (ramdonsimbol === cardSimbol[0] || ramdonsimbol === cardSimbol[1]) {
    color = "red";
  }
  document.getElementById("topSuit").style.color = color;
  document.getElementById("botSuit").style.color = color;
  document.getElementById("numero").innerHTML = getRandom(cardNumber);
  document.getElementById("topSuit").innerHTML = ramdonsimbol;
  document.getElementById("botSuit").innerHTML = ramdonsimbol;
};

setTimeout(function() {
  location.reload();
}, 15000);

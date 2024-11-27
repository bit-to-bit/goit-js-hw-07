'use strict';

const body = document.querySelector('body');
const span = document.querySelector('span.color');
const button = document.querySelector('button.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
});

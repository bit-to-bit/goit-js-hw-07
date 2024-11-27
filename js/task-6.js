'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyBoxes = () => {
  document.querySelector('div#boxes').innerHTML = '';
};

const createBoxes = amount => {
  destroyBoxes();
  const root = document.querySelector('div#boxes');
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    const size = `${30 + i * 10}px`;
    box.style.width = size;
    box.style.height = size;
    boxes.push(box);
  }
  root.append(...boxes);
};

const inputAmount = document.querySelector('div#controls input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

btnCreate.addEventListener('click', () => {
  const amount = inputAmount.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputAmount.value = null;
    return;
  }
  alert('The value must be between 1 and 100.');
});

btnDestroy.addEventListener('click', destroyBoxes);

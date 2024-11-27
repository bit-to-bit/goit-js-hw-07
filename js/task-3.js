'use strict';

const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', event => {
  const name = nameInput.value.trim();
  nameInput.value = name;
  nameOutput.textContent = name === '' ? 'Anonymous' : name;
});

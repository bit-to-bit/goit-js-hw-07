'use strict';

const form = document.querySelector('form.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log({
    email: email,
    password: password,
  });
  form.reset();
});
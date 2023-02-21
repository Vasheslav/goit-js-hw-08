import trottle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const formData = {};

let form = document.querySelector('.feedback-form');
let email = document.querySelector('.feedback-form input');
let message = document.querySelector('.feedback-form textarea');

populateForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', trottle(enteringFormValues, 500));

function enteringFormValues(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('email:', email.value);
  console.log('message:', message.value);
  e.target.reset();
  localStorage.removeItem(KEY);
}

function populateForm() {
  const allInputValue = localStorage.getItem(KEY);
  const allInputValueParse = JSON.parse(allInputValue);

  if (allInputValue) {
    email.value = allInputValueParse.email;
    message.value = allInputValueParse.message;
  }
}

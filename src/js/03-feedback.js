import trottle from 'lodash.throttle';

const KEY = 'feedback-form-state';

let form = document.querySelector('.feedback-form');
let email = document.querySelector('.feedback-form input');
let message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', trottle(enteringFormValues, 500));

populateForm();

function enteringFormValues(evt) {
  let formData = localStorage.getItem(KEY);
  if (formData) {
    formData = JSON.parse(formData);
  } else {
    formData = {};
  }

  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(KEY)));
  e.target.reset();
  localStorage.removeItem(KEY);
}

function populateForm() {
  const allInputValue = JSON.parse(localStorage.getItem(KEY));

  if (allInputValue) {
    email.value = allInputValue.email || '';
    message.value = allInputValue.message || '';
  }
}

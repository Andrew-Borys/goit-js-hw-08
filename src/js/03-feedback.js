import throttle from 'lodash/throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  submitBtn: document.querySelector('.feedback-form button'),
};

refs.submitBtn.addEventListener('click', onFormSubmit, onFormInput);
// refs.form.addEventListener('input', onFormInput);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';

onFormShow();

function onFormSubmit(e) {
  e.preventDefault();

  refs.form.reset();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  const mail = refs.email.value;
  const message = refs.message.value;

  const dataStorage = {
    mail,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataStorage));
}

function onFormShow() {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (formData) {
    refs.email.value = formData.mail;
    refs.message.value = formData.message;
  }
}

import throttle from 'lodash/throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
  submitBtn: document.querySelector('.feedback-form button'),
};

refs.submitBtn.addEventListener('click', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const STORAGE_KEY = 'feedback-form-state';

onFormShow();

function onFormSubmit(e) {
  e.preventDefault();

  refs.form.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  // const formElements = e.currentTarget.elements;

  const mail = formElements.email.value;
  const message = formElements.message.value;

  const dataToSave = {
    mail,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
}

function onFormShow() {
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (refs.email || refs.message === '') {
    refs.email.value = formData.mail;
    refs.message.value = formData.message;
  }
}

const emailForm = document.querySelector('.footer__subscribe-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;

  if (!form.checkValidity()) {
    return;
  }

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

const regBtn = document.querySelector('.register-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal__close');
const registerForm = document.querySelector('.modal__form');
const passwordInput = document.querySelector('#password');
const repeatPasswordInput = document.querySelector('#repeatPassword');



regBtn.addEventListener('click', () => {
  overlay.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('modal-showed');
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let user;
  const password = passwordInput.value;
  const repeatPassword = repeatPasswordInput.value;

  if (password !== repeatPassword) {
    alert('Регистрация отклонена: пароли не совпадают');
    return;
  }

  if (!registerForm.checkValidity()) {
    alert('Регистрация отклонена: заполните все поля корректно');
    return;
  }

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries());
  data.createdOn = new Date();

  user = data;

  console.log(user);
  overlay.classList.remove('modal-showed');
});
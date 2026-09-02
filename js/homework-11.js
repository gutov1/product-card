import Modal from "./Modal.js";
import Form from "./Form.js";

const registerModal = new Modal("registerModal");
const subscribeForm = new Form("subscribeForm")
const registerForm = new Form("registerForm")

document.getElementById("subscribeForm").addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;

  if (!subscribeForm.isValid()) {
    return;
  }

  console.log(subscribeForm.getValues());
});



const regBtn = document.querySelector('.register-btn');

regBtn.addEventListener('click', () => {
  registerModal.open();
});

document.getElementById('registerForm').addEventListener('submit', (event) => {
  event.preventDefault();
  
  const values = registerForm.getValues();

  if (values.password !== values.repeatPassword) {
    alert('Регистрация отклонена: пароли не совпадают');
    return;
  }

  if (!registerForm.isValid()) {
    alert('Регистрация отклонена: заполните все поля корректно');
    return;
  }

  values.createdOn = new Date();
  console.log(values);

  registerModal.close();
  registerForm.reset();
});
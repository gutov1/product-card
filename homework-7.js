const showWeather = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
};

showWeather('Нальчике', 21);

const LIGHT_SPEED = 299792458;

const checkSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    return 'Сверхсветовая скорость';
  }
  else if (speed < LIGHT_SPEED) {
    return 'Субсветовая скорость';
  }
  return 'Скорость света';
}

console.log(checkSpeed(2997924581));

const product = 'Macbook';
const productPrice = 1000;

const buyProduct = budget => {
  if (budget >= productPrice) {
    return `${product} приобретён. Спасибо за покупку!`;
  }

  const difference = productPrice - budget;
  return `Вам не хватает ${difference}$, пополните баланc`;

}

console.log(buyProduct(900));

const firstname = 'Амир';
const lastName = 'Гутов';
const course = 'IT-симулятор';

const greetStudent = (lastName, firstname, course) => {
  return `${lastName} ${firstname} добро пожаловать на курс ${course}`;
}

console.log(greetStudent(lastName, firstname, course))
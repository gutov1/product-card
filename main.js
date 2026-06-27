// Покрас одной карточки

const productCard = document.querySelector('.product-card');
const changeColorBtn = document.querySelector('.change-color-card-btn');

changeColorBtn.addEventListener('click', () => {
  productCard.style.backgroundColor = '#b7b5ecff';
})

// Покрас всех карточек

const productCards = document.querySelectorAll('.product-card');
const changeAllColorBtn = document.querySelector('.change-all-color-card-btn');

changeAllColorBtn.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = '#b7b5ecff')
})

// Открыть google

const openGoogleBtn = document.querySelector('.open-google');

openGoogleBtn.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  }
}

// Вывод контента заголовка

const outputHeaderContent = document.querySelector('.products__title');

outputHeaderContent.addEventListener('mouseover', () => {
  console.log(outputHeaderContent.textContent)
})

// Переключение цветов кнопки

const switchColorBtn = document.querySelector('.change-colors-btn');

switchColorBtn.addEventListener('click', () => {
  switchColorBtn.classList.toggle('btn--active')
})
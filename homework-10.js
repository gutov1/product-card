import { products } from "./products-data.js";

const productList = document.querySelector('.products__list');
const productTemplate = document.querySelector('.products__template');


const renderProductCards = (products) => {
  products.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);

    productClone.querySelector('.product-card__img').src = product.img;
    productClone.querySelector('.product-card__tag').textContent = product.category;
    productClone.querySelector('.product-card__title').textContent = product.title;
    productClone.querySelector('.product-card__description').textContent = product.description;

    const ingredientsList = productClone.querySelector('.product-card__ingredients');
    product.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.classList.add('product-card__ingredient');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });

    const price = `${product.price} \u20BD`;
    productClone.querySelector('.price__value').textContent = price;

    productList.appendChild(productClone);
  });
};

const productsWithTitleAndDesc = products.reduce((acc, product) => {
  acc[product.title] = product.description
  return acc;
}, {});


const getCardsCount = () => {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');
  const count = Number(input);

  if (isNaN(count) || count < 1 || count > 5){
    alert('Некорректный ввод!');
    return 5;
  }
  return count;
};


console.log(productsWithTitleAndDesc);


const count = getCardsCount(); 
const cardsToShow = products.slice(0, count);
renderProductCards(cardsToShow); 
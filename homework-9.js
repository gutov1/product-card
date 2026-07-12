
// 2 - фильтруем массив чисел, оставляя только те, что >= 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(number => number >= 5) ;

console.log(numbersFromFive);

// 3 - проверяем методом includes, есть ли нужный элемент в массиве строк
 
const kitchenTools = ["сковорода", "нож", "миксер", "тостер", "блендер"];

console.log(kitchenTools.includes('вилка'));
console.log(kitchenTools.includes('нож'));

// 4 - функция переворачивает массив: идём с конца в начало и складываем в новый

const reverseArray = (array) => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

console.log(reverseArray(numbers));
console.log(reverseArray(kitchenTools));

// 7 - filter отбирает комментарии, у которых в email есть ".com"
 
import { socialComments } from './comments.js';

const commentsWithComEmail = socialComments.filter(comment => comment.email.includes('.com'));

console.log(commentsWithComEmail);

// 8 - map меняет postId: id <= 5 → 2, иначе → 1 (спред копирует объект)

const commentsWithPostId = socialComments.map(comment => {
  return comment.id <= 5 ? {...comment, postId: 2} : {...comment, postId: 1}
});

console.log(commentsWithPostId);

// 9 - map возвращает новые объекты только с полями id и name

const shortComments = socialComments.map(comment => { 
  return {id: comment.id, name: comment.name}

});

console.log(shortComments);

// 10 - map добавляет свойство isInvalid: true, если body длиннее 180 символов

const commentsWithValidation = socialComments.map(comment => {
  return (comment.body).length > 180 ? {...comment, isInvalid: true} : {...comment, isInvalid: false}
});

console.log(commentsWithValidation);

// 11 - собираем массив всех email двумя способами: через reduce и через map

const emailsFromReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []); // начинаем с пустого массива

const emailsFromMap = socialComments.map(comment => comment.email)

console.log(emailsFromReduce);
console.log(emailsFromMap);

// 12 - превращаем массив почт в строку: toString() и join(', ')

const emailsString = emailsFromReduce.toString();
const emailsJoined = emailsFromMap.join(', ');

console.log(emailsString)
console.log(emailsJoined)
// 3 - создание объекта на основе моих данных

const user = {
  firstName: 'Амир',
  lastName: 'Гутов',
  age: 19, 
  email: 'qwerty@gmail.com',
  job: 'IT-компания',
  country: 'Россия',
  city: 'Нальчик'
};

// 4 - объект, который будет хранить данные об автомобиле

const car = {
  brand: 'Volkswagen',
  model: 'Golf',
  year: 2022,
  color: 'синий',
  transmission: 'робот'
};

car.owner = user;

console.log(car)

// 5 - проверка на наличие свойства "макс скорость"

const checkMaxSpeed = (car) => {
  if ('maxSpeed' in car) {
    return;
  }
  car.maxSpeed = 250;
}

checkMaxSpeed(car)

// 6 - функция с выводом свойства объекта

const outputProperty = (obj, property) => {
  return obj[property];
}

console.log(outputProperty(car, 'brand'));

// 7 - массив, который содержит названия продуктов

const products = ['арбуз','сыр','хлеб'];

console.log(products)

// 8 - создание массива с объектами и добавление еще одного объекта в конец 

const books = [
  { title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Красный",
    genre: "Антиутопия" 
  },

  { title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Чёрный",
    genre: "Магический реализм" 
  },

  { title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Жёлтый",
    genre: "Фэнтези" 
  }
]

books.push({ title: "Три товарища", author: "Эрих Мария Ремарк", year: 1936, coverColor: "Синий", genre: "Роман" });

console.log(books)

// 9 - объединение массивов

const potterBooks = [
  { title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Жёлтый",
    genre: "Фэнтези" 
  },

  { title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Зелёный",
    genre: "Фэнтези" 
  },

  { title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Розовый",
    genre: "Фэнтези" }
]

const allBooks = books.concat(potterBooks)

// 10 - функция принимает массив книг (из задания №9),
// с помощью map добавляет каждой книге свойство isRare —
// true, если год выпуска больше 2000, иначе false 

const markRareBooks = (books) => {
  const updatedBooks = books.map((book) => {
    book.isRare = book.year >= 1995;
    return book;
  });
  return updatedBooks;
}

console.log(markRareBooks(allBooks))
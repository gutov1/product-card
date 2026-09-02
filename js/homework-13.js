class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.temperature = temperature;
  }

  getInfo() {
    return `${this.name} (${this.size}) — ${this.price}₽, температура: ${this.#temperature}°C`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(value) {
    this.#temperature = value;
  }

  #prepare() {
    console.log(`Готовим ${this.name}...`);
  }

  serve() {
    this.#prepare();
    console.log(`${this.name} подан клиенту! Температура: ${this.#temperature}°C`);
    return this.getInfo();
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);
    this.teaType = teaType;
  }

  getInfo() {
    return `${super.getInfo()}, сорт: ${this.teaType}`;
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  getInfo() {
    const baseInfo = super.getInfo();
    return `${baseInfo}, зёрна: ${this.beanType}, молоко: ${this.milkType}`;
  }  
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, fruitFlavor) {
    super(name, size, price, temperature);
    this.fruitFlavor = fruitFlavor;
  }

  getInfo() {
    return `${super.getInfo()}, вкус: ${this.fruitFlavor}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе "${this.name}", расположено: ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Клиент заказал: ${drink.name}`);
    const result = drink.serve();
    console.log(`Заказ обработан кафе "${this.name}"`);
    return result;
  }
}

const cafe = new Cafe("Coffee Point", "ул. Пушкина, 10");
console.log(cafe.getInfo());

const latte = new Coffee("Латте", "M", 250, 70, "арабика", "цельное");
const greenTea = new Tea("Зелёный чай", "L", 150, 85, "сенча");
const lemonade = new Lemonade("Лимонад", "L", 180, 5, "лимон-мята");

console.log(cafe.orderDrink(latte));

console.log(latte.getTemperature());
latte.setTemperature(65);
console.log(latte.getTemperature());
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
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './comments.js';
import './products-data.js';

class Device {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getInfo() {
    console.log(`${this.brand} ${this.model} - ${this.price}$`);
  }
}

class Smartphone extends Device {
  constructor(brand, model, price, camera) {
    super(brand, model, price);
    this.camera = camera;
  }

  takePhoto() {
    console.log(`${this.brand} ${this.model} сделал фото на камеру ${this.camera}MP`);
  }
}

class Laptop extends Device {
  constructor(brand, model, price, ram) {
    super(brand, model, price);
    this.ram = ram;
  }

  compile() {
    console.log(`${this.brand} ${this.model} имеет ${this.ram}GB оперативной памяти`);
  }
}

const iphone = new Smartphone("Apple", "iPhone 15", 45000, 48);
const macbook = new Laptop("Apple", "MacBook Pro", 100000, 32);

iphone.takePhoto();
macbook.compile();
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  // Getter for brand
  get brand() {
    return this[_brand];
  }

  // Setter for brand
  set brand(value) {
    this[_brand] = value;
  }

  // Getter for motor
  get motor() {
    return this[_motor];
  }

  // Setter for motor
  set motor(value) {
    this[_motor] = value;
  }

  // Getter for color
  get color() {
    return this[_color];
  }

  // Setter for color
  set color(value) {
    this[_color] = value;
  }

  // Method to clone the car
  cloneCar() {
    return new Car(this[_brand], this[_motor], this[_color]);
  }
}

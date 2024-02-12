export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand !== 'string') {
      throw TypeError('Brand must be a string');
    }
    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor !== 'string') {
      throw TypeError('Motor must be a string');
    }
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor !== 'string') {
      throw TypeError('Color must be a string');
    }
    this._color = newColor;
  }

  cloneCar() {
    return new this.constructor();
  }
}

// 7-airport.js
class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  // Custom toString method to return the airport code
  toString() {
    return this._code;
  }
}

// Example usage
const airport = new Airport('Los Angeles International', 'LAX');
console.log(airport.toString()); // Output: LAX

export default Airport;

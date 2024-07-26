// 8-holberton_class.js
class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  // Custom valueOf method to return the size when cast to a number
  valueOf() {
    return this._size;
  }

  // Custom toString method to return the location when cast to a string
  toString() {
    return this._location;
  }
}

// Example usage
const holbertonClass = new HolbertonClass(30, 'San Francisco');
console.log(Number(holbertonClass)); // Output: 30
console.log(String(holbertonClass)); // Output: San Francisco

export default HolbertonClass;

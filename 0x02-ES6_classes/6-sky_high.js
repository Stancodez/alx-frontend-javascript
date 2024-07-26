// 6-sky_high.js
import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new TypeError('Number of floors must be a number');
    }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

// Example usage
const skyscraper = new SkyHighBuilding(20000, 50);
console.log(skyscraper.sqft); // Output: 20000
console.log(skyscraper.floors); // Output: 50
console.log(skyscraper.evacuationWarningMessage()); // Output: Evacuate slowly the 50 floors.

export default SkyHighBuilding;

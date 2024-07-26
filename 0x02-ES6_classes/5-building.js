class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method (should be overridden by subclasses)
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

// Example of a subclass that correctly implements the evacuationWarningMessage method
class OfficeBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate the office building immediately!';
  }
}

// Example usage
try {
  const office = new OfficeBuilding(5000);
  console.log(office.sqft); // Output: 5000
  console.log(office.evacuationWarningMessage()); // Output: Evacuate the office building immediately!
} catch (error) {
  console.error(error);
}

try {
  const building = new Building(3000); // This will throw an error
} catch (error) {
  console.error(error); // Output: Error: Building is an abstract class and cannot be instantiated directly
}

try {
  class IncompleteBuilding extends Building {}
  const incomplete = new IncompleteBuilding(2000); // This will throw an error
  console.log(incomplete.evacuationWarningMessage());
} catch (error) {
  console.error(error); // Output: Error: Class extending Building must override evacuationWarningMessage
}

export default Building;

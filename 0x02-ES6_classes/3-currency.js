class Currency {
  constructor(code, name) {
    // Type checks
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Attribute assignment
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

// Example usage:
try {
  const currency = new Currency('USD', 'United States Dollar');
  console.log(currency.displayFullCurrency()); // Output: United States Dollar (USD)

  currency.code = 'EUR';
  currency.name = 'Euro';
  console.log(currency.displayFullCurrency()); // Output: Euro (EUR)
} catch (error) {
  console.error(error);
}

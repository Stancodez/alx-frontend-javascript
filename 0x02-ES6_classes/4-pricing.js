// Import the Currency class from 3-currency.js
import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method to display full price
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('Conversion rate must be a number');
    }
    return amount * conversionRate;
  }
}

// Example usage
try {
  const currency = new Currency('USD', 'United States Dollar');
  const pricing = new Pricing(100, currency);
  console.log(pricing.displayFullPrice()); // Output: 100 United States Dollar (USD)

  const convertedPrice = Pricing.convertPrice(100, 1.2);
  console.log(convertedPrice); // Output: 120
} catch (error) {
  console.error(error);
}

export default Pricing;

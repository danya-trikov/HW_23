function createCurrencyConverter(rate) {
    return function(amount) {
      if (amount.endsWith('USD')) {
        const convertedAmount = parseFloat(amount.slice(0, -3)) / rate;
        return `${convertedAmount.toFixed(2)} EUR`;
      } else if (amount.endsWith('EUR')) {
        const convertedAmount = parseFloat(amount.slice(0, -3)) * rate;
        return `${convertedAmount.toFixed(2)} USD`;
      } else {
        return 'Invalid currency. Please provide a valid amount with either USD or EUR.';
      }
    };
  }
  
  
  const converter = createCurrencyConverter(0.85);
  
  
  const result = converter('100 USD');
  console.log(result);
  
  
  const result = converter('100 EUR');
  console.log(result);
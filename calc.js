function calc(...args) {
  let result = args[0];
  let tempResult = args[0];
  let operator = null;

  for (let i = 1; i < args.length; i++) {
    const current = args[i];

    if (typeof current === 'number' && current < 1000) {
      if (operator === '+') {
        result += current;
        tempResult = current;
      } else if (operator === '-') {
        result -= current;
        tempResult = current;
      } else if (operator === '*') {
        result -= tempResult;
        tempResult *= current;
        result += tempResult;
      } else if (operator === '/') {
        if (current === 0) {
          throw new Error('Division by zero');
        }
        result = result - tempResult + (tempResult / current);
        tempResult = tempResult / current;
      } else {
        throw new Error('Invalid operator');
      }
    } else if (['+', '-', '*', '/'].includes(current)) {
      operator = current;
    } else if (typeof current === 'number' && current >= 1000) {
      // Ignore numbers bigger than or equal to 1000
      continue;
    } else {
      throw new Error('Invalid input type');
    }
  }

  return result;
}

module.exports = calc;

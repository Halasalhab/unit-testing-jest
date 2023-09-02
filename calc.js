// calculator.js
function calc(...args) {
    let result = 0;
    let operator = '+';
  
    for (const arg of args) {
      if (typeof arg === 'number') {
        if (operator === '+') {
          result += arg;
        } else if (operator === '-') {
          result -= arg;
        } else if (operator === '*') {
          result *= arg;
        } else if (operator === '/') {
          if (arg === 0) {
            throw new Error('Division by zero');
          }
          result /= arg;
        }
      } else if (typeof arg === 'string') {
        if (arg === '+' || arg === '-' || arg === '*' || arg === '/') {
          operator = arg;
        } else {
          throw new Error('Invalid operator');
        }
      }
    }
  
    return result > 1000 ? 0 : result;
  }
  
  module.exports = calc;
  

module.exports = cacl;
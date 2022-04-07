function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  try {
    return a + b;
  } catch (error) {
    error.message;
  }

}

module.exports = sum;
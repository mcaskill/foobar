export const sum = (a, b) => {
  if (typeof a !== 'number') {
    throw new TypeError('First parameter must be a number');
  }

  if (typeof b !== 'number') {
    throw new TypeError('Second parameter must be a number');
  }

  return a + b;
};

export const div = (a, b) => {
  if (typeof a !== 'number') {
    throw new TypeError('First parameter must be a number');
  }

  if (typeof b !== 'number') {
    throw new TypeError('Second parameter must be a number');
  }

  return a / b;
};

export const mod = (a, b) => {
  if (typeof a !== 'number') {
    throw new TypeError('First parameter must be a number');
  }

  if (typeof b !== 'number') {
    throw new TypeError('Second parameter must be a number');
  }

  return a % b;
};

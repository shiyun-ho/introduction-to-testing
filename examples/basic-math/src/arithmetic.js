export const add = (a, b) => {

  if (typeof (a) === 'string' || typeof (b) === 'string') {
    if (typeof (a) === 'string') a = Number(a);
    if (typeof (b) === 'string') b = Number(b);

  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error('Parameter is not a valid input');
  }
  return a + b;
};

export const subtract = (a, b) => {
  if (Array.isArray(a)) {
    a = a.reduce((a, b) => {
      return a - b;
    })
  }

  return a - b;
};

export const multiply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};

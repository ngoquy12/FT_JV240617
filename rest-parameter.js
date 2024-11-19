const sum = (...rest) => {
  let total = 0;

  for (let i = 0; i < rest.length; i++) {
    total += rest[i];
  }

  return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7));

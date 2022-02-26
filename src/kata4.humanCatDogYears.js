const humanCatDogYears = (number) => {
  if (number <= 2) return number < 2 ? [1, 15, 15] : [2, 24, 24];
  return [number, 24 + (number - 2) * 4, 24 + (number - 2) * 5];
};

module.exports = humanCatDogYears;

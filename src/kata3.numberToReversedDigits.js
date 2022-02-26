const numberToReversedDigits = (number) => {
  return number
    .toString()
    .split("")
    .reverse()
    .map((stringNum) => parseInt(stringNum, 0));
};

module.exports = numberToReversedDigits;

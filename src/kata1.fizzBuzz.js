const fizzBuzz = (number) => {
  return (number % 3 ? "" : "Fizz") + (number % 5 ? "" : "Buzz") || number;
};

module.exports = fizzBuzz;

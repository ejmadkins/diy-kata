const reachDestination = (distance, speed) => {
  return `I should be there in ${Math.round((distance / speed) * 2) /
    2} hours.`;
};

console.log(reachDestination(44, 10));

module.exports = reachDestination;

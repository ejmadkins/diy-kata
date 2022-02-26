const joinNames = (namesObj) => {
  return `${namesObj
    .map((name) => name.name)
    .slice(0, -1)
    .join(", ")} & ${namesObj.slice(-1).pop().name}`;
};

module.exports = joinNames;

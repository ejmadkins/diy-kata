const getEmployerRole = (employeeName, employees) => {
  return employees.filter((employee) => employee.name === employeeName).pop()
    .role;
};

module.exports = getEmployerRole;

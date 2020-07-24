const findMatching = (driverArr, driverStr) => {
  return driverArr.filter(
    (person) => person.toLowerCase() === driverStr.toLowerCase()
  );
};

const fuzzyMatch = (driverArr, driver) => {
  return driverArr.filter(
    (possibleMatch) => possibleMatch.indexOf(driver) === 0
  );
};

const matchName = (driverArr, driverStr) => {
  return driverArr.filter((record) => record.name === driverStr);
};

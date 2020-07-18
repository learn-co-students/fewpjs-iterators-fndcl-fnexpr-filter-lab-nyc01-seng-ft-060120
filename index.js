const findMatching = (driversArray, string) => {
  return driversArray.filter(driver => driver.toLowerCase()== string.toLowerCase())
}

const fuzzyMatch = (driversArray, string) => {
  return driversArray.filter(driver => driver.startsWith(string) )
}

const matchName = (driversArray, string) => {
  return driversArray.filter(driver => driver.name === string)
}
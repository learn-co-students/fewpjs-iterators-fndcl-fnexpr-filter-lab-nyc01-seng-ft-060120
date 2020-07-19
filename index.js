// Code your solution here
function findMatching(drivers, driver_name) {
  return drivers.filter(driver =>
    driver.toLowerCase() == driver_name.toLowerCase())
}
function fuzzyMatch(drivers, letter) {
  return drivers.filter(driver => driver.startsWith(letter))
}

function matchName(drivers, driver_name) {
  return drivers.filter(driver => driver.name === driver_name)
}

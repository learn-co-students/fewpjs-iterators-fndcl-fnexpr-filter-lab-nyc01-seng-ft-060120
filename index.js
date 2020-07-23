let findMatching = (drivers, string) => {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}
let fuzzyMatch = (drivers, string) => {
    let x = string.length
    return drivers.filter(driver => driver.toLowerCase().slice(0, x) === string.toLowerCase())
}
let matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}
// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( name =>
      name.toLowerCase() === string.toLowerCase()
    )
  }
  
  function fuzzyMatch(drivers, string) {
    return drivers.filter( name =>
      name.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
  }
  
  function matchName(drivers, string) {
    return drivers.filter( id => id.name === string)
  }
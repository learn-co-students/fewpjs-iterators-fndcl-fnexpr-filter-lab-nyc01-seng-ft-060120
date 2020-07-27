// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(element => 
        element.toLowerCase() === name.toLowerCase()
        )
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(element =>
        element.toLowerCase().indexOf(letters.toLowerCase()) === 0
        )
}

function matchName(drivers, string) {
    return drivers.filter(element => element.name === string)
}
// Code your solution here

const findMatching = (drivers, john) => {
    return drivers.filter( driver => 
         driver.toLowerCase() === john.toLowerCase()
    )
}

// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const fuzzyMatch = (drivers, j) => {
    return drivers.filter( driver => 
        driver.toLowerCase().indexOf(j.toLowerCase()) === 0
    )
}

const matchName = (drivers, john) => {
    return drivers.filter(
        driver => driver.name === john
    )

}

// console.log(fuzzyMatch(drivers, 'b'))
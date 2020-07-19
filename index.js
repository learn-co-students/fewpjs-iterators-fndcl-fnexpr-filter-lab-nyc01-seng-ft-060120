const array = [
    { name: "Driver1" },
    { name: "driver2" }
]

const findMatching = (array, string) => {
    return array.filter(stringItem => stringItem.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (array, string) => {
    return array.filter(stringItem => stringItem.startsWith(string))
}


const matchName = (aoo, string) => aoo.filter(object => object.name === string)
console.log(
    matchName(array, "driver2")
)
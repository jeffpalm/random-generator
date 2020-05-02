// This function will return a random integer between 1 and max
// Ex. randNumGenerator(100) will return a random number between 1 and 100

const randNumGenerator = max => Math.floor(Math.random() * max)

// This function will return an array with the length and content passed in
// Ex. arrayGenerator(randNumGenerator(10), 10) will return an array with a length of 10 filled with random numbers between 1 and 10

const arrayGenerator = (content, length) => {
    let rArray = []
    for (let i = 0; i < length; i++) {
        rArray.push(content)
    }
    return rArray
}

//This function will return an arr of random people objects

const ssnGenerator = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(randNumGenerator(10))
    }
    return `${arr[0]}${arr[1]}${arr[2]}-${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}


const fs = require('fs')
const personObjectGenerator = () => {
    let firstNamesArray = fs.readFileSync("firstnames.txt").toString().split("\r\n")
    let lastNamesArray = fs.readFileSync("lastnames.txt").toString().split("\r\n")
    let first = firstNamesArray[randNumGenerator(2000)]
    let last = lastNamesArray[randNumGenerator(1000)]
    return {
        first,
        last,
        birthday: {
            day: Math.ceil(Math.random()*30),
            month: Math.ceil(Math.random()*12),
            year: Math.floor(Math.random()*100) + 1920
        },
        ssn: ssnGenerator(),
        email: `${first}.${last}@email.com`
    }
}



console.log(personObjectGenerator())
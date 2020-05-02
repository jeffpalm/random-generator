// Initializing fs.ReadStream API.

const fs = require('fs')

// Returns an array with the length and random string/object function passed in

const arrayGen = (valuesFn, length) => {
    let rArray = []
    for (let i = 0; i < length; i++) {
        rArray.push(valuesFn())
    }
    return rArray
}

// Returns an array of numbers

const numArrayGen = (max, length) => {
    let rArray = []
    for (let i = 0; i < length; i++) {
        rArray.push(Math.floor(Math.random()*max))
    }
    return rArray
}

// Returns an object with given parameters
// Must pass in 2 arrays of equal length
// Key in keys array will be assigned value at the same index of values array

const objGen = (keys, values) => {
    let rObj = {}
    for (let i = 0; i < keys.length; i++) {
        rObj[keys[i]] = values[i]
    }
    return rObj
}

// Returns a random integer >= 0 < max

const randNumFloor = max => Math.floor(Math.random() * max)

// Returns a random integer > 0 <= max

const randNumCeil = max => Math.ceil(Math.random() * max) 

// Returns a random phone number string

const randPhoneNum = () => {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(randNumFloor(10))
    }
    return `${arr[0]}${arr[1]}${arr[2]}-${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

// Returns a random social security number LIKE string

const randSsn = () => {
    let arr = []
    for (let i = 0; i < 9; i++) {
        arr.push(randNumFloor(10))
    }
    return `${arr[0]}${arr[1]}${arr[2]}-${arr[3]}${arr[4]}-${arr[5]}${arr[6]}${arr[7]}${arr[8]}`
}


// Returns a random person object using the attached txt files for first/last name
// firstnames.txt and lastnames.txt must be in the same directory as the .js file
// Person Object Structure:
// {
//     first: 'Estelle',
//     last: 'Jenkins',
//     birthday: { day: 30, month: 9, year: 1933 },
//     email: 'Estelle.Jenkins@email.com',
//     phone: '304-210-5924',
//     ssn: '126-95-1727'
// }
  
const randPersonObj = () => {
    let firstNamesArray = fs.readFileSync("firstnames.txt").toString().split("\n")
    let lastNamesArray = fs.readFileSync("lastnames.txt").toString().split("\n")
    let first = firstNamesArray[randNumFloor(firstNamesArray.length)]
    let last = lastNamesArray[randNumFloor(lastNamesArray.length)]
    return {
        first,
        last,
        birthday: {
            day: randNumCeil(30),
            month: randNumCeil(12),
            year: randNumFloor(100) + 1919
        },
        email: `${first}.${last}@email.com`,
        phone: randPhoneNum(),
        ssn: randSsn(),
    }
}

// Returns a random word 1-4 characters long

const randShortWord = () => {
    let wordArr = fs.readFileSync("google-10000-english-usa-no-swears-short.txt").toString().split("\n")
    return wordArr[randNumFloor(wordArr.length)]
}

// Returns a random word 5-8 characters long

const randMedWord = () => {
    let wordArr = fs.readFileSync("google-10000-english-usa-no-swears-medium.txt").toString().split("\n")
    return wordArr[randNumFloor(wordArr.length)]
}

// Returns a random word 9+ characters long

const randLongWord = () => {
    let wordArr = fs.readFileSync("google-10000-english-usa-no-swears-long.txt").toString().split("\n")
    return wordArr[randNumFloor(wordArr.length)]
}

// Returns a rondom word

const randWord = () => {
    let shortWordArr = fs.readFileSync("google-10000-english-usa-no-swears-short.txt").toString().split("\n")
    let medWordArr = fs.readFileSync("google-10000-english-usa-no-swears-medium.txt").toString().split("\n")
    let longWordArr = fs.readFileSync("google-10000-english-usa-no-swears-long.txt").toString().split("\n")
    let wordArr = [...shortWordArr, ...medWordArr, ...longWordArr]
    return wordArr[randNumFloor(wordArr.length)]
}

// Exports functions to be used in playground file

module.exports = {
    randNumFloor,
    randNumCeil,
    arrayGen,
    numArrayGen,
    objGen,
    randPhoneNum,
    randSsn,
    randPersonObj,
    randShortWord,
    randShortWord,
    randMedWord,
    randLongWord,
    randWord
}
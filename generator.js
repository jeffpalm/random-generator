// Initializing fs.ReadStream API.

const fs = require('fs')

// Returns an array with the length and random string/object function passed in

const arrayGen = (valuesFn, length) => {
    let output = []
    for (let i = 0; i < length; i++) {
        output.push(valuesFn())
    }
    return output
}

// Returns an array of numbers

const numArrayGen = (min, max, length) => {
    let output = []
    for (let i = 0; i < length; i++) {
        output.push(randNum(min, max))
    }
    return output
}

// Returns a random integer between min and max

const randNum = (min, max) => Math.round(Math.random() * (max - min + 1)) + min

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
  
function Person() {
    this.first = '';
    this.last = '';
    this.birthday = '';
    this.email = '';
    this.phone = '';
    this.ssn = '';
}

Person.prototype.firstNames = fs.readFileSync("firstnames.txt").toString().split("\n")
Person.prototype.lastNames = fs.readFileSync("lastnames.txt").toString().split("\n")
Person.prototype.words = fs.readFileSync("google-10000-english-usa-no-swears-long.txt").toString().split("\n")

Person.prototype.randomize = function(){
    this.first = this.firstNames[randNum(0, this.firstNames.length - 1)];
    this.last = this.lastNames[randNum(0, this.firstNames.length - 1)];
    this.birthday = `${randNum(1,12)}/${randNum(1,30)}/${randNum(1930,2019)}`
    this.phone = `${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}-${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}-${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}`
    this.ssn = `${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}-${randNum(0,9)}${randNum(0,9)}-${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}${randNum(0,9)}`
    this.email = `${this.first}.${this.last}@${this.words[randNum(0,this.words.length - 1)]}.com`
}

let newPerson = new Person()
newPerson.randomize()

console.log(newPerson)

// Returns a random word 1-4 characters long

const randShortWord = () => {
    let wordArr = fs.readFileSync("google-10000-english-usa-no-swears-short.txt").toString().split("\n")
    return wordArr[randNum(0,wordArr.length)]
}

// Returns a random word 5-8 characters long

const randMedWord = () => {
    let wordArr = fs.readFileSync("google-10000-english-usa-no-swears-medium.txt").toString().split("\n")
    return wordArr[randNum(0,wordArr.length)]
}

// Returns a random word 9+ characters long

const randLongWord = () => {
    let wordArr = fs.readFileSync("google-10000-english-usa-no-swears-long.txt").toString().split("\n")
    return wordArr[randNum(0,wordArr.length)]
}

// Returns a rondom word

const randWord = () => {
    let shortWordArr = fs.readFileSync("google-10000-english-usa-no-swears-short.txt").toString().split("\n")
    let medWordArr = fs.readFileSync("google-10000-english-usa-no-swears-medium.txt").toString().split("\n")
    let longWordArr = fs.readFileSync("google-10000-english-usa-no-swears-long.txt").toString().split("\n")
    let wordArr = [...shortWordArr, ...medWordArr, ...longWordArr]
    return wordArr[randNum(0,wordArr.length)]
}

// Exports functions to be used in playground file

module.exports = {
    randNum,
    numArrayGen,
    randShortWord,
    randShortWord,
    randMedWord,
    randLongWord,
    randWord,
    Person
}
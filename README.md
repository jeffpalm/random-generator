# About
The goal of this repo is to create a set functions that generate random datatypes students can use while learning the fundamentals of JavaScript. The functions must easy to use and must generate data that helps students further their understanding.

## Function List
- arrayGen(values, length)
    - Returns an array
    - values: What will be placed at each index of the returned array
    - length: Number representing length of the returned array
- randNum(min, max)
    - Returns random integer between min and max
- Person()
    - Returns a single object in the following format:
    ```
    {
        first: 'Estelle',
        last: 'Jenkins',
        birthday: { day: 30, month: 9, year: 1933 },
        email: 'Estelle.Jenkins@email.com',
        phone: '304-210-5924',
        ssn: '126-95-1727'
    }
    ```
    - Note: *These are randomly generated names and numbers based on the contained txt files. Any likeness to a real person is purely coincidental*
- randShortWord()
    - Returns a random word 1-4 characters long
- randMedWord()
    - Returns a random word 5-8 characters long
- randLongWord()
    - Returns a random word 9+ characters long
- randWord()
    - Returns a random word

## Example Uses
[![Run on Repl.it](https://repl.it/badge/github/palmytree/random-generator)](https://repl.it/github/palmytree/random-generator)
- Use playground file to call functions about using supplied 'gen' object.
```JS
gen.randNum(100, 200)
```

## Resources
Word array generators use the swear free word lists from first20hours awesome repo
[google-10000-english](https://github.com/first20hours/google-10000-english)

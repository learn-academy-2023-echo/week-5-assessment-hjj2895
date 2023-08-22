// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

//input: string
//output: string with coded message
describe("codedMessage", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        const secretCodeWord2 = "Gobbledygook"
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        const secretCodeWord3 = "Eccentric"
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ReferenceError: codedMessage is not defined

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// b) Create the function that makes the test pass.

// Pseudo code:
// "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// Create a function that accepts a string as parameter
// Create a variable and assign it to an empty string
// Loop through the string
    //if character is 'a' or 'A'
        // add 4 to empty string
    //else if character is 'e' or 'E'
        // add 3 to empty string
    //else if character is 'i' or 'I'
        // add 1 to empty string
    //else if character is 'o' or 'O'
        // add 0 to empty string
    //otherwise
        // add current character to empty string
// return new string

const codedMessage = (str) => {
    let res = ''
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'A' || str[i] === 'a'){
            res += 4
        }else if (str[i] === 'E' || str[i] === 'e'){
            res += 3
        }else if (str[i] === 'I' || str[i] === 'i'){
            res += 1
        }else if (str[i] === 'O' || str[i] === 'o'){
            res += 0
        }else{
            res += str[i]
        }
    }
    return res
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// input: array of words and a single letter
// output: array of all words containing that letter

describe("containedLetter", () => {
    it("returns an array of all words containing the letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const filterLetterA = "a"
        expect(containedLetter(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        const filterLetterE = "e"
        expect(containedLetter(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// ReferenceError: containedLetter is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that accepts an array and a letter as parameters
// Use the filter method to return a new array that contains the particular letter
// Use the condition of if the word in lower case includes the letter in lowercase

const containedLetter = (arr, char) => {
    return arr.filter((word) => word.toLowerCase().includes(char.toLowerCase()))
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// input: array of 5 numbers
// output: boolean value

describe("fullHouse", () => {
    it("returns true if it is a full house or false if not", () => {
        const hand1 = [5, 5, 5, 3, 3]
        expect(fullHouse(hand1)).toEqual(true)
        const hand2 = [5, 5, 3, 3, 4]
        expect(fullHouse(hand2)).toEqual(false)
        const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouse(hand3)).toEqual(false)
        const hand4 = [7, 2, 7, 2, 7]
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that accepts an array as parameter
// Create an empty object
// Loop through the array
    //if object key is not defined in object
        //give key a value of 1
    //otherwise
        //increment value
// Convert the values of object into an array using Object.values and sort it ascending
// Return true if first number in array is 2 and second number is 3
    //otherwise return false


const fullHouse = (arr) => {
    let obj = {}
    for (let num of arr){
        if (obj[num] === undefined){
            obj[num] = 1;
        }else{
            obj[num]++
        }
    }
    let res = Object.values(obj).sort()
    if (res[0] === 2 && res[1] === 3){
        return true;
    }else{
        return false;
    }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
//flags
//i flag means case insensitive 
//g flag means global

/* const text = "Please switch off the WIFI before you leave."

const regex = /wifi/gi

const doesMatch = regex.test(text) //boolean

console.log(doesMatch) */


//Conctructor
/* const text = "Please switch off the WIFI before you leave."
const userInput = "wifi"

const regex = new RegExp(userInput, 'g')

const doesMatch = regex.test(text) //boolean

console.log(doesMatch) */


const numbers = [1, 2, 3, 4, 5];

numbers.reduce((acc, curr) => acc + curr);
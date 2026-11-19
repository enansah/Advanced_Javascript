// named
/* import{ shortSpaceTripsArr,
     interplanetaryDestinationsArr 
    } from './data.js'

console.log(interplanetaryDestinationsArr)
console.log(shortSpaceTripsArr) */

// default
/* import {interplanetaryDestinationsArr, shortSpaceTripsArr} from './data.js'
import getMatchingTripsArr from './data.js'
console.log(getMatchingTripsArr(interplanetaryDestinationsArr, 'exotic')) */

// readable date
/*  const dateSnapshot = new Date()
 console.log(dateSnapshot.toString())  */

 //get only year
/*   const dateSnapshot = new Date()
 console.log(dateSnapshot.getFullYear()) */


//  Hoisting is a JavaScript mechanism where variables 
// and function declarations are moved to the top of 
// their containing scope during the compilation phase. 
// This means that you can use functions and variables 
// before they are declared in the code.







// For of loop is used to iterate over the values of an iterable object like an array, while for in loop is used to iterate over the properties of an object.
/* const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

for (let character of characters){
    console.log( `The title is ${character.title}, emoji is ${character.emoji}, and their powers are: ${character.powers.join(', ')}` )
}
 */





// For in loop is used to iterate over the properties of an object, while for of loop is used to iterate over the values of an iterable object like an array.

/* for (let property in character1) {
    console.log(character1[property])
} */





//forEach is used to iterate over arrays and perform a function on each element, 
// while map is used to create a new array by transforming each element of the original array based on a provided function.

/* characters.forEach(function(character, index){
    console.log(index, character.title) */










// Include() method

/* // const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){

        if(shoppingList.includes(itemInput.value)){
            console.log('no duplicates')
        }
        else{
            shoppingList.push(itemInput.value)
            render()        
        }
        itemInput.value = '' 
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()

 */





// map() method 
 
/* const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

function convertMilesToKms() {
    return distanceWalkedMilesArr.map(function (distanceMiles, index) {
        return `Month ${index}: ${distanceMiles * conversionFactorMilesToKm}KM`
    })
    console.log(distanceWalkedKmArr)
}

convertMilesToKms() */








//Join method 
/* const guestsArr = ['Amy', 'Clare', 'Keith', 'Dan'] 

console.log(guestsArr.join('-'))   */





//Difference between forEach and map
//forEach does not return a new array, while 
//map returns a new array with the results of applying a provided function 
//to each element of the original array.


//Anti- pattern: Using forEach to create a new array instead of using map and 
//vice versa






//filter() method
//The filter() method creates a new array with all elements that pass the test implemented by the provided function. 
//It does not modify the original array.

/* const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){
return age >= 18 
})

console.log(adults) */








//filter() method with objects
/* const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]
 */






//reduce() method
//The reduce() method executes a reducer function on each 
// element of the array, resulting in a single output value. 
//It does not modify the original array.

/* const rainJanuaryByWeek = [ 10, 20, 0, 122 ]

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement){
    console.log('total: ' + total, 'currentElement: ' + currentElement)
    return total + currentElement
})

console.log(totalRainfallJanuary) */


//reduce() method with objects 









//For loop Break and Continue

/* const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for (let i = 0; i < expensesAndRefunds.length; i++) {
    const currentExpenseOrRefund = expensesAndRefunds[i]
    
    if (currentExpenseOrRefund.year >= cutoffDate) {
        console.log(`Reached cutoff date, exiting loop`)
        break   
    }
    
    if (currentExpenseOrRefund.amount < 0) {
        console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`)
        continue
    } 
    
    totalSpent += currentExpenseOrRefund.amount 
}


console.log(`Total amount spent on items in 2023: $${totalSpent}`) */







//Other useful array methods: some(), every(), find(), findIndex(), flat(), flatMap(), sort(), reverse(), 
// slice(), splice(), fill(), copyWithin() and reduceRight().

/* const dailyStepsArr = [1000, 1200, 800, 1500, 1100, 1900, 1300]

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function(stepCount) {
    return stepCount >= 10000
})

// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function(stepCount) {
    return stepCount >= 10000
})

const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function(invoice) {
    return invoice > 1000
})

// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function(invoice) {
    return invoice > 1000
})

// .indexOf() gives us the index of a given item in the array.
// console.log(invoicesUSDArr.indexOf(26))

// .at() takes a positive or negative integer and returns the item at that index.
// Negative integers count back from the end of the array. 
console.log(invoicesUSDArr.at(-2))
 */





//Replace and ReplaceAll methods
/* const paragraph = "js is the backbone of the internet. It was created in 1995. Before js, websites were so boring."

//Replace() method replaces the first occurrence of a specified value in a string with another value. It does not modify 
// the original string, but returns a new string with the replacement made.
paragraph.replace(pattern, replacement) 

//ReplaceAll() method replaces all occurrences of a specified value in a string with another value. It does not modify 
// the original string, but returns a new string with all replacements made.
console.log(paragraph.replaceAll('js', 'JS'))
*/

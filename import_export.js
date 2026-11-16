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
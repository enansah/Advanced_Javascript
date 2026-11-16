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

// For of loop
const characters = [
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




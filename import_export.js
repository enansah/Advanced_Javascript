// named
/* import{ shortSpaceTripsArr,
     interplanetaryDestinationsArr 
    } from './data.js'

console.log(interplanetaryDestinationsArr)
console.log(shortSpaceTripsArr) */

// default
import {interplanetaryDestinationsArr, shortSpaceTripsArr} from './data.js'
import getMatchingTripsArr from './data.js'
console.log(getMatchingTripsArr(interplanetaryDestinationsArr, 'exotic'))
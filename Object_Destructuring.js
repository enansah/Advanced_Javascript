/* const favouriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
}  */
 
// const title = favouriteFilm.title
// const year = favouriteFilm.year
// const genre = favouriteFilm.genre
// const star = favouriteFilm.star
// const director = favouriteFilm.director


// const { title, year, genre, star, director } = favouriteFilm

// console.log(`My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}.`)


// setTimeout

/* let capital='lima'
const mark= 10
function logAnswer(capital,mark) {
    
    console.log(`The answer is ${capital} of course! If you got that right, giver yourself ${mark} points.`)
}
setTimeout(logAnswer,3000,capital,mark)

console.log('What is the capital of Peru?') */
/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs. 
       The answer is 'Lima' and it's 10 points for getting it right. 
*/

/* const questionTimer = setTimeout(logAnswer, 3000, capital, mark)

document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(questionTimer)
    console.log('Cancelling...')
}) */


// setInterval

/* function startCountdown(device) {
    let secondsRemaining = 3

    const shutdownTimer = setInterval(function() {
        if (secondsRemaining > 0) {
            console.log(`Your ${device} will shut down in ${secondsRemaining} seconds`)
            secondsRemaining--
        } else {
            console.log(`Your ${device} is shutting down`)
            clearInterval(shutdownTimer)
        }

    }, 1000)
}
startCountdown('MacBook')
 */


// Importing and Exporting



//Difference btn Function Declaration and Expression in JavaScript:
//Declaration can be hoisted, but Expression cannot be hoisted.


//Declaration
// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }

//Expression
/* console.log(getSpendAlert(150))

const getSpendAlert = function(amount){
    return `Warning! You just spent £${amount}!`
}
//error: Cannot access 'getSpendAlert' before initialization */

//Arrow Function
/* const getSpendAlert = amount => {
    return `Warning! You just spent £${amount}!`
}

console.log(getSpendAlert(150)) */

/* const getSpendAlert = (name, amount) => {
    return `Warning! Hey ${name}! You just spent £${amount}!`
} 

console.log(getSpendAlert('Tom', 100)) */

//Note: If there is only one parameter, you can omit the parentheses. 
//If the function body has only one statement, you can omit the curly braces and the return keyword.

/* const getSpendAlert = amount => `Warning! You just spent £${amount}!`
console.log(getSpendAlert(100)) */
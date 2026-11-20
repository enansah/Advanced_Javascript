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





//rest parameters 
//it allows us to represent an indefinite number of arguments as an array.

/* function setPermissionLevel(permissionLevel, ...names) {
    
    names.forEach((name)=> console.log(`${name} now has ${permissionLevel} level access.`))
    
}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike', 'Clare')
 */



//rest parameter on objects 
/* function getLabelsHtml(text, sender, ...staffObjs) {
    const labelsHtml = staffObjs.map(staffObj => 
`<div class="label-card">
    <p>Dear ${staffObj.name}</p>
    <p>${text}</p>
    <p>Best wishes,</p>
    <p>${sender}</p>
</div>`
    ).join('')
    return labelsHtml
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'}
    ) 
 */





 //callback function is a function that is called in another function.   
 
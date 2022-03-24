function add(...numbers){

    return numbers.reduce((a, b) => {
        return a + b;
    })
}

function subtract(...numbers){

    return numbers.reduce((a, b) => {
        return a - b;
    })
}

function multiply(...numbers){

    return numbers.reduce((a, b) => {

        return a * b;
    })
}

function divide(...numbers){

    return numbers.reduce((a, b) => {

        return a / b;
    })
}

console.log(add(3, 5, 8))
console.log(subtract(3, 5, 8))
console.log(multiply(3, 5, 8))
console.log(divide(3, 5, 8))
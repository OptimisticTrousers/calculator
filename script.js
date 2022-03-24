function add(...numbers){

    numbers.reduce((a, b) => {
        return a + b;
    })
}

function subtract(...numbers){

    numbers.reduce((a, b) => {
        return a - b;
    })
}

function multiply(...numbers){

    numbers.reduce((a, b) => {

        return a * b;
    })
}
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        let operator = "";

        let result = 0;

        if(button.textContent === "+"
        || button.textContent === "-"
        || button.textContent === "x"
        || button.textContent === "÷"){

            operator += button.textContent;
        }
        else if(button.textContent === "="){

            operate()
        }
        else if(button.textContent === "CLEAR"){

            clear();
        }
        else{

            display.textContent += button.textContent;
        }

    })
})

function clear(){

    display.textContent = "";
}

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

function operate(operator, a, b){

    switch(operator){

        case '+':
            add(a, b);
        case '-':
            subtract(a, b);
        case '*':
            multiply(a, b);
        case '/':
            divide(a, b);
    }
}

console.log(add(3, 5, 8))
console.log(subtract(3, 5, 8))
console.log(multiply(3, 5, 8))
console.log(divide(3, 5, 8))
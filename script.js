const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');

const lastInputs = document.querySelector('.last-inputs');

let operator = "";

buttons.forEach(button => {

    button.addEventListener('click', () => {


        let number1 = "";

        let number2 = "";

        if(button.textContent === "+"
        || button.textContent === "-"
        || button.textContent === "x"
        || button.textContent === "÷"){

            operator = button.textContent;
            display.textContent += button.textContent;
            lastInputs.textContent += display.textContent
            display.textContent =""

        }
        else if(button.textContent === "="){

            number1 = display.textContent.slice(0, display.textContent.indexOf(`${operator}`));

            number2 = display.textContent.slice(display.textContent.indexOf(`${operator}`)+1, display.textContent.length);

            display.textContent = operate(operator, parseFloat(number1), parseFloat(number2));

        }
        else if(button.textContent === "CLEAR"){

            clear();
        }
        else if(button.textContent === "DELETE"){

            display.textContent = display.textContent.slice(0, -1);
        }
        else{

            display.textContent += button.textContent;
        }

    })
})

function clear(){

    display.textContent = "";
    lastInputs.textContent = "";
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
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

console.log(add(3, 5, 8))
console.log(subtract(3, 5, 8))
console.log(multiply(3, 5, 8))
console.log(divide(3, 5, 8))
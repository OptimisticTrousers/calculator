const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');

const lastInputs = document.querySelector('.last-inputs');

const dotButton = document.querySelector('.dot');

let operator = "";

let result = 0;

let number1 = "";

let number2 = "";

let hasCalculated = false;


dotButton.addEventListener('click', () => {


    if(display.textContent.includes('.')){
        return
    } 
    else{
        display.textContent += ".";
    }
})

function operatorCheck(button){

        if(button.textContent === "+"
        || button.textContent === "-"
        || button.textContent === "x"
        || button.textContent === "÷"){

            return button.textContent;
        }

}

buttons.forEach(button => {

        if(button.textContent === "."){
            return;
        }

    button.addEventListener('click', () => {




        //if(display.textContent.includes('.')){
            //dotButton.removeEventListener('click');
        //}
        if(operatorCheck(button)){

            operator = button.textContent;

            if(number1 !== "" && number2 !== ""){

                
                if(number1 === "."){
                    number1 = "0."
                }
                else if(number2 === "."){
                    number2 = "0."
                }
                else{
                    number1 = lastInputs.textContent.slice(0, lastInputs.textContent.indexOf(`${operator}`));
                    number2 = display.textContent.slice(display.textContent.indexOf(`${operator}`)+1, display.textContent.length);
                }

                result = operate(operator, parseFloat(number1), parseFloat(number2));
                lastInputs.textContent = result;
                lastInputs.textContent += operator;
                display.textContent = "";
                number1 ="";
                number2 ="";
                operator = "";

            }
            else{

                display.textContent += button.textContent;
                lastInputs.textContent += display.textContent
                display.textContent = ""

            }



        }
        else if(button.textContent === "="){


                number1 = lastInputs.textContent.slice(0, lastInputs.textContent.indexOf(`${operator}`));

                number2 = display.textContent;

                lastInputs.textContent += number2;

                lastInputs.textContent = "";

                result = display.textContent = operate(operator, parseFloat(number1), parseFloat(number2));

                number1 ="";
                number2 ="";
                operator = "";

            
            

        }
        else if(button.textContent === "CLEAR"){

            clear();
        }
        else if(button.textContent === "DELETE"){

            //if(display.textContent.slice(0, 1) === "."){
                //dotButton.addEventListener('click', () => {
                    //display.textContent += dotbutton.textContent;
                //})
            //}


            display.textContent = display.textContent.slice(0, -1);
        }
        else{

            if(operatorCheck(button)){
                return;
            }
            else{

                if(number1 !== ""){
                    number2 =button.textContent 
                }
                display.textContent += button.textContent;

            }

        }

    });


})

//function buttonCallBack(){

        //let number1 = "";

        //let number2 = "";

        ////if(display.textContent.includes('.')){
            ////dotButton.removeEventListener('click');
        ////}
        //if(button.textContent === "+"
        //|| button.textContent === "-"
        //|| button.textContent === "x"
        //|| button.textContent === "÷"){

            //operator = button.textContent;
            //display.textContent += button.textContent;
            //lastInputs.textContent += display.textContent
            //display.textContent =""

            //result += display.textContent = operate(operator, parseFloat(number1), parseFloat(number2));
            

        //}
        //else if(button.textContent === "="){

            //number1 = display.textContent.slice(0, display.textContent.indexOf(`${operator}`));

            //number2 = display.textContent.slice(display.textContent.indexOf(`${operator}`)+1, display.textContent.length);

            //display.textContent = operate(operator, parseFloat(number1), parseFloat(number2));

        //}
        //else if(button.textContent === "CLEAR"){

            //clear();
        //}
        //else if(button.textContent === "DELETE"){

            ////if(display.textContent.slice(0, 1) === "."){
                ////dotButton.addEventListener('click', () => {
                    ////display.textContent += dotbutton.textContent;
                ////})
            ////}

            //display.textContent = display.textContent.slice(0, -1);
        //}
        //else{

            //display.textContent += button.textContent;
        //}
//}

function clear(){

    display.textContent = "";
    lastInputs.textContent = "";
    number1 = "";
    number2 = "";
    operator = "";
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
const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');

const lastInputs = document.querySelector('.last-inputs');

const dotButton = document.querySelector('.dot');

let operator = "";

let result = 0;

let number1 = "";

let number2 = "";


dotButton.addEventListener('click', () => {


    if(display.textContent.includes('.')){
        return
    } 
    else{
        display.textContent += ".";
    }
})

function operatorCheck(textContent){

        if(textContent === "+"
        || textContent === "-"
        || textContent === "x"
        || textContent === "÷"){

            return true;
        }
        return false;

}

buttons.forEach(button => {

        if(button.textContent === "."){
            return;
        }

    button.addEventListener('click', () => {





        //if(display.textContent.includes('.')){
            //dotButton.removeEventListener('click');
        //}
        if(button.textContent === "DELETE"){

            backspaceDelete();

            if(display.textContent.includes('e')){
                clear();
            }
            //if(display.textContent.slice(0, 1) === "."){
                //dotButton.addEventListener('click', () => {
                    //display.textContent += dotbutton.textContent;
                //})
            //}

        }
        else if(operatorCheck(button.textContent)){

            if(operator == ""){

                operator = button.textContent;
            }

            if(number1 !== "" && number2 !== "" && operator !== ""){

                
                number1 = lastInputs.textContent.slice(0, lastInputs.textContent.indexOf(`${operator}`));
                number2 = display.textContent.slice(display.textContent.indexOf(`${operator}`)+1, display.textContent.length);

                result = operate(operator, parseFloat(number1), parseFloat(number2));
                operator = button.textContent;
                lastInputs.textContent = result;
                lastInputs.textContent += operator;
                display.textContent = "";
                number1 = result;
                number2="";

            }
            else{

                display.textContent += " " + button.textContent;
                lastInputs.textContent += display.textContent
                display.textContent = ""

            }



        }
        else if(button.textContent === "="){


            if(operator === ""){
                return 
            }
            if(lastInputs.textContent.endsWith(`${operator}`) && display.textContent === ""){
                alert(`Sorry, please enter a valid number after the operator ${operator}`);
            }
            else{


                number1 = lastInputs.textContent.slice(0, lastInputs.textContent.indexOf(`${operator}`));

                number2 = display.textContent;

                lastInputs.textContent += number2;

                lastInputs.textContent = "";

                result = display.textContent = operate(operator, parseFloat(number1), parseFloat(number2));

                number1 = result;
                number2="";
                operator = "";
            }
                

            
            

        }
        else if(button.textContent === "CLEAR"){

            clear();
        }
        else{

            if(operatorCheck(button)){
                return;
            }

            else if(lastInputs.textContent.includes('+')
            || lastInputs.textContent.includes('-')
            || lastInputs.textContent.includes('x')
            || lastInputs.textContent.includes('÷')){

                number2 += button.textContent;
            }
            if(display.textContent === "0"){
                display.textContent = "";
            }
            if(display.textContent.length >= 21){
                return;
            }
                number1 += button.textContent;
                display.textContent += button.textContent;


        }

        document.addEventListener('keydown', (event) => {

            console.log(event.key)
        })


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

    display.textContent = "0";
    lastInputs.textContent = "";
    number1 = "";
    number2 = "";
    operator = "";
}

function backspaceDelete(){

            if(display.textContent === ""){

                lastInputs.textContent = lastInputs.textContent.slice(0, -1);

                if(operatorCheck(lastInputs.textContent.slice(0, -1))){
                    operator = "";
                }
            }
            else if(display.textContent === "0" || display.textContent.length == 1){
                display.textContent = "0";
            }
            else{

                    display.textContent = display.textContent.slice(0, -1);
            }

}

function add(a, b){

    return a + b;
}

function subtract(a, b){

    return a - b
}

function multiply(a, b){

    return a * b;
}

function divide(a, b){

    return a / b;
}

//function checkIfValid(){

    //let validCheck = display.textContent;
    
    //if(validCheck.endsWith('+') === true 
    //|| validCheck.endsWith('-') === true 
    //|| validCheck.endsWith('x') === true 
    //|| validCheck.endsWith('÷') === true){

        //alert('Sorry, please enter a value after the operator');
        //return false;
    //}
    //else{
        //return true;
    //}
//}

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
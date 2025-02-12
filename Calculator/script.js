// class Calculator{
//     constructor(previousOperandTextElement, currentOperandTextElement){
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//     }

//     clear(){

//     }
//     delete(){

//     }
//     appendNumber(number){

//     }
//     chooseOperation(operation){

//     }
//     compute(){

//     }
//     updateDisplay(){
        
//     }
// }


// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equal]'); 
// const deleteButton = document.querySelector('[data-delete]'); 
// const allClearButton = document.querySelector('[data-all-clear]');
// const  previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const  currentOperandTextElement = document.querySelector('[data-current-operand]');


// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
        
//     })
// })
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

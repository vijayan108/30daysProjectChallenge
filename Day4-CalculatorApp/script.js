const display = document.querySelector('.display');

const buttons = document.querySelectorAll('button');


let calculation = [];

let accumulator;




function calculate(button) {
        const  value = button.textContent;

        if (value === 'C') {
                calculation = [];
                display.textContent = "";
        }

        else if (value === '=') {
                display.textContent = eval(accumulator);
                calculation = [];
                accumulator = "";
        }
        else {
            calculation.push(value);
            accumulator = calculation.join('');
            display.textContent = accumulator;
        }
    }

buttons.forEach(button => { 
        button.addEventListener('click', () => {
                calculate(button);
                     
        });
});


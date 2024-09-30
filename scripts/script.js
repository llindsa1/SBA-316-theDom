//Cache the display element using getElementById
const display= document.getElementById('display');

//Cache at least one element using querySelector or querySelectorAll
const numButtons= document.querySelectorAll('.num-btn');
const opButtons= document.querySelectorAll('op-btn');

//Variables
let currentValue= '';
let operator= '';
let previousValue = '';

function updateDisplay(value) {
    display.value = value;
}

//Add Event Listeners
numButtons.forEach(button => {
    button.addEventListener('click' ,
        function () {
            currentValue+=
            button.getAttribute('data-value');
            updateDisplay(currentValue);
        }
    );
});

opButtons.forEach(button => {button.addEventListener 
    ('click' ,
        function ()  {
            if (currentValue === '')
                return;
            operator = button.getAttribute('data-value');
            previousValue = currentValue;
            currentValue = '';
        }
    );
});
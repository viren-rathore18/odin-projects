document.addEventListener('DOMContentLoaded', () => {
  let log = console.log;



  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');
  let currentValue = '0';
  let previousValue = null;
  let operation = null;
  let resetDisplay = false;

  buttons.forEach(button => {
     button.addEventListener('click', function() {
      const value = button.textContent;
      if(button.classList.contains('numericKeys')) {
        handleNumber(value);
      }else if(button.classList.contains('operatorKeys')){
        handleOperator(value)
      }else if(button.classList.contains('equals')){
        handleEquals();
      }else if(button.classList.contains('function')){
        handleFunction(value)
      }
     })
  });


  //we need functions to handle different operations
  
  function handleNumber(num) {
    if(currentValue === '0' || resetDisplay) {
      currentValue = num;
      resetDisplay = false;
    } else {
      currentValue += num;
    }
    updateDisplay();
  }
  
  function handleOperator(op){
    if(operation !== null && !resetDisplay){
      calculate();
    }

    previousValue = currentValue;
    operation = op;
    resetDisplay = true;
  }



  function handleEquals(){
    if(operation === null) return;
    calculate();
    operation = null;
  }


  function handleFunction(func) {
    if(func === 'AC'){
      currentValue = '0';
      previousValue = null;
      operation = null;
    }else if(func === 'DEL') {
      currentValue = currentValue.length - 1 ? currentValue.slice(0, -1) : '0';
    }
    updateDisplay();
  }

  function handleDecimal() {
    if(resetDisplay){
      currentValue = '0.'
      resetDisplay = false;
    }else if(!currentValue.includes('.')){
      currentValue += '.';
    }
    updateDisplay();
  }


  function calculate() {
      let result;

      const prev = parseFloat(previousValue);
      const current = parseFloat(currentValue);
      switch(operation) {
        case '+': 
            result = prev + current;
            break;
        case '-': 
            result = prev - current;
            break;
        case '*': 
            result = prev * current;
            break;
        case '/': 
            result = prev / current;
            break;
        defualt: 
            result ;
      }

      currentValue = result.toString();
      resetDisplay = true;
      updateDisplay();
  }

   function updateDisplay() {
        const parts = currentValue.split('.');

             parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

             display.textContent = parts.join('.');

             if(display.textContent.length > 12) {
              display.textContent = parseFloat(currentValue).toExponential(6);
             }
        }

  });  














































































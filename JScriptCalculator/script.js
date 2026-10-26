// Comment
// Comment

 let currentInput = '';                                     // Comment
 let previousInput = '';                                    // Comment
 let currentOperation = '';                                 // Comment

 function appendNumber(num) {
     currentInput += num;
     document.getElementById('display').value =
     `${previousInput} ${currentOperation} ${currentInput}`;// Comment
 }

 function appendOperation(op) {
     if (currentInput === '') return;
     if (previousInput !== '') calculate();
     currentOperation = op;
     previousInput = currentInput;
     currentInput = '';
     document.getElementById('display').value =
     `${previousInput} ${currentOperation}`;
 }

 function calculate() {
     if (previousInput === '' || currentInput === '') return;
     let prev = parseFloat(previousInput);
     let curr = parseFloat(currentInput);
     let result;

     switch (currentOperation) {
         case '+': result = prev + curr; break;
         case '-': result = prev - curr; break;
         case '*': result = prev * curr; break;
         case '/':
             if (curr === 0) { alert("Cannot divide by zero"); return; }
             result = prev / curr; break;
         default: return;
     }

     currentInput = result.toString();
     currentOperation = '';
     previousInput = '';
     document.getElementById('display').value = currentInput;
 }

 function clearDisplay() {
     currentInput = '';
     previousInput = '';
     currentOperation = '';
     document.getElementById('display').value = '';
 }

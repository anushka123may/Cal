function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').innerText = '0';
  }
  
  function backspace() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1) || '0';
    } else {
        display.innerText = '0';
    }
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
        // Safely evaluate the expression
        display.innerText = Function(`return ${display.innerText}`)();
    } catch (error) {
        display.innerText = "Error";
    }
  }
  
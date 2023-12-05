function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  // Ask user for input
  const num1 = Number(prompt("Enter the first number: "));
  const num2 = Number(prompt("Enter the second number: "));
  const operation = prompt("Choose an operation (+, -, *, /): ");
  
  let result;
  
  // Perform the selected operation
  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      console.log("Invalid operation.");
  }
  
  // Output the result
  console.log(`${num1} ${operation} ${num2} = ${result}`);

  
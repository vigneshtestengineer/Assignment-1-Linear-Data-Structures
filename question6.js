// 6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

// Function to convert postfix to prefix expression
function postfixToPrefix(postfix) {
    const stack = []; // Initialize an empty array acting as a stack
  
    // Loop through each character in the postfix expression
    for (let i = 0; i < postfix.length; i++) {
      const char = postfix[i]; // Get the current character
  
      if (isOperand(char)) {
        stack.push(char); // If it's a letter or number, push it to the stack
      } else if (isOperator(char)) {
        // If it's an operator (+, -, *, /), perform the following:
        const operand2 = stack.pop(); // Pop the last two operands from the stack
        const operand1 = stack.pop();
        const prefixExp = char + operand1 + operand2; // Create a prefix expression
        stack.push(prefixExp); // Push the prefix expression back to the stack
      }
    }
  
    return stack.pop(); // Return the final prefix expression
  }
  
  // Function to check if a character is an operand (letter or number)
  function isOperand(char) {
    return (/[a-zA-Z0-9]/).test(char); // Returns true if char is a letter or number
  }
  
  // Function to check if a character is an operator (+, -, *, /)
  function isOperator(char) {
    return (['+', '-', '*', '/'].indexOf(char) !== -1); // Returns true if char is an operator
  }
  
  // Example usage
  const postfixExpression = "ABC*+D/";
  const prefixExpression = postfixToPrefix(postfixExpression);
  console.log("Postfix Expression:", postfixExpression);
  console.log("Prefix Expression:", prefixExpression);
  
  
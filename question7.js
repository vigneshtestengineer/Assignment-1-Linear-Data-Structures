// 7. Write a program to convert prefix expression to infix expression.

// Function to check if the character is an operand (a letter)
function isOperand(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
  }
  
  // Function to convert prefix expression to infix expression
  function prefixToInfix(prefix) {
    const stack = [];
  
    for (let i = prefix.length - 1; i >= 0; i--) {
      const symbol = prefix[i];
  
      if (isOperand(symbol)) {
        stack.push(symbol); // If operand, push to stack
      } else {
        const operand1 = stack.pop(); // Pop two operands and create infix expression
        const operand2 = stack.pop();

        stack.push(`(${operand1}${symbol}${operand2})`);
      }
    }
  
    return stack.pop(); // Resulting infix expression
  }
  
  // Example usage:
  const prefixExpression = "*+AB-CD"; // Example prefix expression
  const infixExpression = prefixToInfix(prefixExpression);
  console.log("Prefix Expression:", prefixExpression);
  console.log("Infix Expression:", infixExpression);
  
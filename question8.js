// 8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(code) {
    const stack = []; // Create an empty stack to store opening brackets
  
    // Loop through each character in the code
    for (let i = 0; i < code.length; i++) {
      const char = code[i]; // Get the current character
  
      // If it's an opening bracket, add it to the stack
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else if (char === ')' || char === ']' || char === '}') {
        // If it's a closing bracket
        const lastOpeningBracket = stack.pop(); // Get the last opening bracket from the stack
  
        // Check if the current closing bracket matches the last opening bracket
        if (
          (char === ')' && lastOpeningBracket !== '(') ||
          (char === ']' && lastOpeningBracket !== '[') ||
          (char === '}' && lastOpeningBracket !== '{')
        ) {
          return false; // Return false if brackets don't match
        }
      }
    }
  
    // If the stack is empty at the end, all brackets are closed properly
    return stack.length === 0;
  }
  
  // Example usage:
  const codeSnippet1 = "(){}[]";
  const codeSnippet2 = "({})[]";
  const codeSnippet3 = "({[])}";
  
  console.log(areBracketsClosed(codeSnippet1)); // Output: true
  console.log(areBracketsClosed(codeSnippet2)); // Output: true
  console.log(areBracketsClosed(codeSnippet3)); // Output: false
  
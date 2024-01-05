// 9. Write a program to reverse a stack.

// Define a Stack class to store elements
class Stack {
    constructor() {
      this.items = []; // Initialize an empty array to hold stack elements
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element); // Add the element to the end of the array (top of the stack)
    }
  
    // Method to remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow: Stack is empty"; // Check if the stack is empty
      }
      return this.items.pop(); // Remove and return the top element from the stack
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0; // Returns true if the stack is empty, false otherwise
    }
  
    // Method to reverse the stack
    reverse() {
      const reversedStack = []; // Create an empty array to hold reversed elements
  
      // Loop through each element in the original stack
      while (!this.isEmpty()) {
        reversedStack.push(this.pop()); // Remove elements from the original stack and push them into reversedStack
      }
  
      this.items = reversedStack; // Assign the reversed elements back to the original stack
    }
  }
  
  // Example usage:
  
  // Create a new stack
  const stack = new Stack();
  
  // Add elements to the stack
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log("Original Stack:", stack.items); // Output: Original Stack: [1, 2, 3, 4]
  
  // Reverse the stack
  stack.reverse();
  
  console.log("Reversed Stack:", stack.items); // Output: Reversed Stack: [4, 3, 2, 1]
  
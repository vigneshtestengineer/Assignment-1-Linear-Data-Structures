// 10. Write a program to find the smallest number using a stack.

class MinStack {
    constructor() {
      this.stack = []; // This array will hold all elements in the stack
      this.minStack = []; // This array will track the minimum elements
    }
  
    push(value) {
      this.stack.push(value); // Add the new value to the main stack
  
      // Check if the minStack is empty or if the new value is smaller than or equal to the current minimum
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value); // If so, add the new value to the minStack
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return "Underflow: Stack is empty"; // Check if the stack is empty
      }
  
      const removedItem = this.stack.pop(); // Remove the top element from the main stack
  
      // If the removed item is the same as the current minimum, also remove it from the minStack
      if (removedItem === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return removedItem; // Return the removed element

      console.log("removedItem : " + removedItem);
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return "Stack is empty"; // Check if the minStack is empty
      }
      return this.minStack[this.minStack.length - 1]; // Return the current minimum from the minStack
    }
  }
  
  // Example usage:
  
  const stack = new MinStack(); // Create a new MinStack
  
  stack.push(3); // Add elements to the stack
  stack.push(5);
  stack.push(2);
  stack.push(7);
  
  console.log("Minimum element in the stack:", stack.getMin()); // Output: Minimum element in the stack:
  
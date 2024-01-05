// 2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.


function reverseArrayInPlace(arr) {
    let start = 0; // Initialize a variable 'start' to 0. This will be used as the starting index.
    let end = arr.length - 1; // Initialize a variable 'end' to the last index of the array.
  
    while (start < end) { // Run a loop until the start index is less than the end index.
      // Swap the elements at positions 'start' and 'end'.
      let temp = arr[start]; // Store the element at index 'start' in a temporary variable 'temp'.
      arr[start] = arr[end]; // Assign the element at index 'end' to the index 'start'.
      arr[end] = temp; // Assign the element stored in 'temp' to the index 'end'.
  
      start++; // Increment the 'start' index by 1, moving towards the center of the array.
      end--; // Decrement the 'end' index by 1, moving towards the center of the array.
    }
  
    // The array 'arr' has been reversed in place.
  }
  
  // Example usage:
  let array = [1, 2, 3, 4, 5];
  console.log("Original Array:", array); // Output the original array.
  reverseArrayInPlace(array); // Call the function to reverse the array in place.
  console.log("Reversed Array:", array); // Output the reversed array.
  
// 4. Write a program to print the first non-repeated character from a string?

function firstNonRepeatedChar(str) {
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i); // Get the current character
      if (str.indexOf(char) === str.lastIndexOf(char)) {
        // Check if the first occurrence is the same as the last occurrence
        return char; // Return the first non-repeated character
      }
    }
    return null; // If no non-repeated character is found, return null
  }
  
  // Example usage:
  const inputString = "programming";
  const firstNonRepeated = firstNonRepeatedChar(inputString);
  
  if (firstNonRepeated) {
    console.log("The first non-repeated character is:", firstNonRepeated);
  } else {
    console.log("No non-repeated character found in the string.");
  }
  
  
// 3. Write a program to check if two strings are a rotation of each other?


function areRotations(str1, str2) {
    // Check if the length of both strings is the same
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Concatenate str1 with itself
    const concatenatedStr = str1 + str1;
  
    // Check if str2 is a substring of the concatenated string
    if (concatenatedStr.includes(str2)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage
  const string1 = "rotation";
  const string2 = "tionrota";
  
  if (areRotations(string1, string2)) {
    console.log("The strings are rotations of each other");
  } else {
    console.log("The strings are not rotations of each other");
  }
  
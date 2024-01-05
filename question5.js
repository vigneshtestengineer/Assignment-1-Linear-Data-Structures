// 5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

// Define a function towerOfHanoi that takes parameters: numDisks, source, auxiliary, and target.
function towerOfHanoi(numDisks, source, auxiliary, target) {

    // If there's only one disk left to move, do the following:
    if (numDisks === 1) {
  
      // Print the move: Move disk from source to target.
      console.log(`Move disk from ${source} to ${target}`);
  
      // Exit the function as the base case is handled.
      return;
    }
  
    // Recursively move numDisks - 1 disks from source to auxiliary, using target as a temporary peg.
    towerOfHanoi(numDisks - 1, source, target, auxiliary);
  
    // Print the move: Move the remaining largest disk from source to target.
    console.log(`Move disk from ${source} to ${target}`);
  
    // Recursively move numDisks - 1 disks from auxiliary to target, using source as a temporary peg.
    towerOfHanoi(numDisks - 1, auxiliary, source, target);
  }

  // Set the number of disks for the Tower of Hanoi problem.
const numDisks = 3;

// Initiate solving the Tower of Hanoi problem with numDisks disks, starting from peg 'A', moving to peg 'C' using 'B' as an auxiliary.
towerOfHanoi(numDisks, 'A', 'B', 'C');

  
  
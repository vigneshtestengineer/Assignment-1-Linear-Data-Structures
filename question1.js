// 1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

function findPairsWithSum(arr, targetSum) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Initialize pointers: left at the start and right at the end of the sorted array
    let left = 0;
    let right = arr.length - 1;

    // Create an empty array to store pairs
    const pairs = [];

    // While the left pointer is less than the right pointer
    while (left < right) {
        // Calculate the sum of elements at the positions indicated by the pointers
        const currentSum = arr[left] + arr[right];

        // If the sum matches the targetSum
        if (currentSum === targetSum) {
            // Store the pair and move both pointers inward
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        }
        // If the current sum is less than the target, move the left pointer to the right
        else if (currentSum < targetSum) {
            left++;
        }
        // If the current sum is greater than the target, move the right pointer to the left
        else {
            right--;
        }
    }

    // Return the array containing pairs that sum up to the targetSum
    return pairs;
}

// Example usage:
const array = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
const target = 7;

// Find pairs in 'array' that sum up to 'target'
const result = findPairsWithSum(array, target);

// Display the pairs
console.log(`Pairs with sum ${target}: `, result);

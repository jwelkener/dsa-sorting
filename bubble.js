function bubbleSort(arr) {
    // Helper function to swap two elements in the array
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // Swap elements using destructuring assignment
    };

    // Outer loop iterates over the entire array, shrinking the unsorted portion each time
    for (let i = arr.length; i > 0; i--) {
        // Inner loop iterates through the unsorted portion of the array
        for (let j = 0; j < i - 1; j++) {
            // If the current element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1); // Swap the elements
            }
        }
    }

    return arr; // Return the sorted array
}

module.exports = bubbleSort;

// Time Complexity:

// 	•	Worst-Case Time Complexity: O(n²)
// 	•	In the worst case, the algorithm needs to perform n passes, and for each pass, it might perform n-1 comparisons and swaps, resulting in O(n²) time complexity.
// 	•	Best-Case Time Complexity: O(n)
// 	•	If the array is already sorted, the algorithm can stop early (if optimized with a flag for no swaps in a pass). Without optimization, it would still be O(n²), but with early termination, it can be O(n).
// 	•	Average-Case Time Complexity: O(n²)
// 	•	On average, the algorithm requires O(n²) operations as most cases involve a significant number of swaps and comparisons.

// Summary:

// 	•	Bubble Sort is generally inefficient for large datasets due to its O(n²) time complexity, but it is simple to implement and can be optimized for nearly sorted arrays with early termination.
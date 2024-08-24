// Time Complexity: Object(n^2)

function selectionSort(arr) {
	// Helper function to swap two elements in the array
	const swap = (arr, idx1, idx2) =>
	  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  
	// Outer loop iterates over the entire array
	for (let i = 0; i < arr.length; i++) {
	  let lowest = i; // Assume the current position (i) is the lowest
  
	  // Inner loop searches for the lowest value in the remaining unsorted portion of the array
	  for (let j = i + 1; j < arr.length; j++) {
		if (arr[lowest] > arr[j]) {
		  lowest = j; // Update the lowest index if a smaller value is found
		}
	  }
  
	  // If the current index is not the lowest, swap the elements
	  if (i !== lowest) swap(arr, i, lowest);
	}
  
	return arr; // Return the sorted array
  }
  
  module.exports = selectionSort;


//   Time Complexity:

// 	•	Worst-Case Time Complexity: O(n²)
// 	•	The outer loop runs n times, and for each iteration, the inner loop runs n - i - 1 times, leading to O(n²) time complexity.
// 	•	Best-Case Time Complexity: O(n²)
// 	•	Even if the array is already sorted, the algorithm will still perform all comparisons, resulting in O(n²) time complexity.
// 	•	Average-Case Time Complexity: O(n²)
// 	•	On average, the selection sort will still require O(n²) operations due to the nested loops.

// Summary:

// 	•	Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the minimum element from the unsorted portion and moving it to the beginning. Despite its simplicity, selection sort is inefficient for large datasets due to its O(n²) time complexity. Unlike bubble sort, it performs a constant number of swaps, which can be an advantage when swapping operations are costly.
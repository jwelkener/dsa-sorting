// Function to perform the partitioning step in quicksort
function pivot(arr, start = 0, end = arr.length - 1) {
	// Helper function to swap two elements in the array
	const swap = (arr, idx1, idx2) => {
	  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // Swap elements using destructuring assignment
	};
  
	// Assume the pivot is always the first element of the current subarray
	let pivot = arr[start];
	let swapIdx = start; // This will keep track of where the pivot should be placed
  
	// Loop through the subarray starting from the element after the pivot
	for (let i = start + 1; i <= end; i++) {
	  // If the current element is less than the pivot
	  if (pivot > arr[i]) {
		swapIdx++; // Increment the swap index
		swap(arr, swapIdx, i); // Swap the current element with the element at swapIdx
	  }
	}
  
	// Swap the pivot element with the element at swapIdx to place it in the correct position
	swap(arr, start, swapIdx);
  
	return swapIdx; // Return the index of the pivot after it has been moved to its correct position
  }
  
  // Function to perform quicksort on an array
  function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
	  // Get the index of the pivot element after partitioning
	  let pivotIndex = pivot(arr, left, right);
  
	  // Recursively sort the left subarray (elements less than the pivot)
	  quickSort(arr, left, pivotIndex - 1);
  
	  // Recursively sort the right subarray (elements greater than the pivot)
	  quickSort(arr, pivotIndex + 1, right);
	}
	return arr; // Return the sorted array
  }
  
  module.exports = { pivot, quickSort };

//   Time Complexity:

// 	•	Worst-Case Time Complexity: O(n²)
// 	•	Occurs when the pivot is consistently the smallest or largest element, leading to unbalanced partitions (e.g., when the array is already sorted).
// 	•	Best-Case Time Complexity: O(n log n)
// 	•	Occurs when the pivot consistently splits the array into two nearly equal halves, leading to balanced partitions.
// 	•	Average-Case Time Complexity: O(n log n)
// 	•	Generally, quicksort performs well with most inputs and the average case is O(n log n).

// Summary:

// 	•	Quicksort is a highly efficient sorting algorithm, especially with large datasets. However, its worst-case performance can degrade to O(n²), which can be mitigated by using strategies like randomized pivots or the median-of-three pivot selection. Despite this, its average-case and best-case performance make it one of the fastest sorting algorithms in practice.
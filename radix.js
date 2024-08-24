// Function to get the digit at the ith place in a number
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; // Extracts the digit at the ith place
  }
  
  // Function to count the number of digits in a number
  function digitCount(num) {
	if (num === 0) return 1; // Special case for 0, which has one digit
	return Math.floor(Math.log10(Math.abs(num))) + 1; // Calculates the number of digits in the number
  }
  
  // Function to find the maximum number of digits in an array of numbers
  function mostDigits(nums) {
	let maxDigits = 0; // Initialize the maximum digits to 0
	for (let i = 0; i < nums.length; i++) {
	  maxDigits = Math.max(maxDigits, digitCount(nums[i])); // Update maxDigits with the highest digit count found
	}
	return maxDigits; // Return the maximum digit count
  }
  
  // Function to perform radix sort on an array of numbers
  function radixSort(nums) {
	let maxDigitCount = mostDigits(nums); // Find the number with the most digits
	for (let k = 0; k < maxDigitCount; k++) {
	  let digitBuckets = Array.from({ length: 10 }, () => []); // Create an array of 10 empty buckets
	  for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		let digit = getDigit(num, k); // Get the digit at the kth place for the current number
		digitBuckets[digit].push(num); // Place the number in the corresponding bucket
	  }
	  nums = [].concat(...digitBuckets); // Flatten the buckets into a single array
	}
	return nums; // Return the sorted array
  }
  
  module.exports = { getDigit, digitCount, mostDigits, radixSort };

// Time Complexity:

// 	•	Worst-Case Time Complexity: O(nk)
// 	•	Where n is the number of numbers in the array, and k is the number of digits in the largest number.
// 	•	This is efficient compared to O(n log n) sorts like mergesort and quicksort when k is small relative to n.
// 	•	Best-Case and Average-Case Time Complexity: O(nk)
// 	•	Radix sort performs consistently with the same time complexity for most cases, as it processes each digit of each number a fixed number of times.

// Summary:

// 	•	Radix Sort is a non-comparative integer sorting algorithm that works well with numbers when the number of digits (k) is much smaller than the number of elements (n). It is particularly efficient when all the numbers have a similar number of digits. Radix sort requires additional space for the buckets and is generally faster than O(n log n) sorting algorithms for large datasets of small integers.  
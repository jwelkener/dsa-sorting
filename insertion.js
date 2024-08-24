// insertion.js 

// This implementation of insertion sort sorts the array in place and has a time complexity of O(n²) in the worst case, where n is the length of the array.

function insertionSort(arr) {
    // Iterate over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]; // Store the current element to be positioned

        // Start comparing with the previous elements in the sorted portion
        let j = i - 1; // Set j to the index of the previous element

        // Shift elements to the right until the correct position for currentValue is found
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the previous element
        }

        // Insert the currentValue into its correct position
        arr[j + 1] = currentValue;
    }

    return arr; // Return the sorted array
}

module.exports = insertionSort;
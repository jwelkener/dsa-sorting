// Function to merge two sorted arrays into one sorted array
function merge(arr1, arr2) {
    let results = []; // Initialize an empty array to store the merged results
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // While there are elements in both arrays to compare
    while (i < arr1.length && j < arr2.length) {
        // Compare elements from both arrays
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]); // Push the smaller element into the results array
            i++; // Move the pointer in arr1 forward
        } else {
            results.push(arr2[j]); // Push the smaller element into the results array
            j++; // Move the pointer in arr2 forward
        }
    }

    // If there are remaining elements in arr1, push them all into the results array
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, push them all into the results array
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results; // Return the merged sorted array
}

// Function to perform merge sort on an array
function mergeSort(arr) {
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);

    // Recursively sort the left half of the array
    const left = mergeSort(arr.slice(0, mid));

    // Recursively sort the right half of the array
    const right = mergeSort(arr.slice(mid));

    // Merge the two sorted halves and return the sorted array
    return merge(left, right);
}

module.exports = { merge, mergeSort };
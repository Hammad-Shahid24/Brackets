// Function to return unique elements from an array
const getUniqueElements = (array) => {
  return [...new Set(array)];
};

// Example usage
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = getUniqueElements(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

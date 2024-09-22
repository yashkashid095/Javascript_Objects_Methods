// The rest operator allows a function to accept an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// In this example, the sum function uses the rest operator to collect all the arguments passed to the function into an array called numbers.



// Rest Operator in Array Destructuring
// The rest operator can also be used in array destructuring to collect the remaining elements into a new array.

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Here, the first two elements of the array are assigned to first and second, and the rest of the elements are collected into the rest array.


// Rest Operator in Object Destructuring
// Similarly, the rest operator can be used in object destructuring to collect the remaining properties into a new object

const { a, b, ...rest1 } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest1); // Output: { c: 3, d: 4 }

// Rest Operator in Function Arguments
// The rest operator is particularly useful in handling function arguments when you don't know how many arguments will be passed to the function.

function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5)); // Output: [12, 15]

// In this example, the first argument is assigned to multiplier, and the rest of the arguments are collected into the numbers array


// In Function Parameters: Collects all remaining arguments into an array.
// In Array Destructuring: Collects remaining elements into a new array.
// In Object Destructuring: Collects remaining properties into a new object.

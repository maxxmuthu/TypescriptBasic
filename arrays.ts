// 1. Creating Arrays

// Basic Array
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["hello", "world"];

// Array with Array Generic
let numbers2: Array<number> = [1, 2, 3, 4, 5];
let strings2: Array<string> = ["hello", "world"];


// 2. Accessing Elements
let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana


// 3. Adding and Removing Elements

// Using push and pop
let fruits2: string[] = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits2); // Output: ["apple", "banana", "cherry"]

let lastFruit = fruits2.pop();
console.log(lastFruit); // Output: cherry
console.log(fruits2);    // Output: ["apple", "banana"]

// Using unshift and shift
let fruits3: string[] = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits3); // Output: ["apple", "banana", "cherry"]

let firstFruit = fruits3.shift();
console.log(firstFruit); // Output: apple
console.log(fruits3);     // Output: ["banana", "cherry"]


// 4. Iterating Over Arrays

let numArr: number[] = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}


// Using for...of loop
for (let num of numArr) {
    console.log(num);
  }


// 5. Array Methods

// Map
let numArr1: number[] = [1, 2, 3, 4, 5];
let squaredNumbers = numArr1.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter
let numArr2: number[] = [1, 2, 3, 4, 5];
let evenNumbers = numArr2.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce
let numArr3: number[] = [1, 2, 3, 4, 5];
let sum = numArr3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// forEach
let numArr4: number[] = [1, 2, 3, 4, 5];
numArr4.forEach(num => console.log(num));

// findIndex
let numArr5: number[] = [1, 2, 3, 4, 5];
let foundIndex = numArr5.findIndex(num => num > 3);
console.log(foundIndex); // Output: 3

// includes
let numArr6: number[] = [1, 2, 3, 4, 5];
let includesThree = numArr6.includes(3);
console.log(includesThree); // Output: true


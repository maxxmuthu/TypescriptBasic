// 1. Basic Function
// In this example, a and b are parameters of type number, and the function returns a number.

function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, 3)); // Output: 8


// 2. Function with Optional Parameters
// In this example, greeting is an optional parameter. 
// If it's not provided, the function uses a default greeting.

function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  
  console.log(greet("Alice")); // Output: Hello, Alice!
  console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!


// 3. Function with Default Parameters
// Here, greeting has a default value of "Hello".

function greets(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greets("Alice")); // Output: Hello, Alice!
  console.log(greets("Alice", "Good evening")); // Output: Good evening, Alice!


// 4. Function with Rest Parameters
// In this example, ...numbers is a rest parameter that collects all additional arguments into an array.

function sum1(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum1(1, 2, 3)); // Output: 6
  console.log(sum1(5, 10, 15, 20)); // Output: 50


// 5. Function with Typed Return Values
// Functions can return specific types, including objects or arrays:
// In this case, the function createUser returns an object with name and age properties.

function createUser(name: string, age: number): { name: string; age: number } {
    return { name, age };
  }
  
  let user1 = createUser("Bob", 25);
  console.log(user1); // Output: { name: 'Bob', age: 25 }


// 6. Arrow Functions

const multiply = (a: number, b: number): number => {
    return a * b;
  }
  
  console.log(multiply(4, 5)); // Output: 20

// 7. Function Overloading
// In this example, the display function can take either a string or a number as an argument.

function display(value: string): void;   // void -> indicates no return value:
function display(value: number): void;
function display(value: any): void {
  console.log(value);
}

display("Hello"); // Output: Hello
display(123); // Output: 123

/*
In the third function display(value: any): void, the void return type indicates that the 
function itself does not return any value to the caller. 
This means that when you call display("Hello"), 
the function performs its task (printing the value to the console) and then completes without returning any value.
*/

// 8. Generic Functions
// Generic functions allow you to create functions that work with different types
// Here, identity is a generic function that works with any type T.

function identity<T>(arg: T): T {
    return arg;
  }
  
  console.log(identity<string>("Hello")); // Output: Hello
  console.log(identity<number>(42)); // Output: 42

/*
1.) identity<T>: This defines a generic function named identity with a type parameter T.
2.) arg: T: This means the function takes a parameter arg of type T.
3.) : T: This means the function returns a value of type T.

1.) identity<string>("Hello"): The type parameter T is replaced with string. 
So, the function takes a string and returns a string.
2.) identity<number>(42): The type parameter T is replaced with number. 
So, the function takes a number and returns a number.
*/
/*
The any type in TypeScript is a type that can represent any value, 
effectively opting out of type checking. 
It is useful in situations where you don't know the type of a value at compile time or 
when dealing with dynamic content. 
*/

// Example 1: Declaring a Variable with any Type

let value: any;

value = 42;
console.log(value); // Output: 42

value = "hello";
console.log(value); // Output: hello

value = true;
console.log(value); // Output: true

value = { name: "Alice", age: 30 };
console.log(value); // Output: { name: "Alice", age: 30 }


// Example 2: Using any in Function Parameter

function logValue(value: any): void {
    console.log(value);
  }
  
  logValue(10);          // Output: 10
  logValue("test");      // Output: test
  logValue({ key: "value" }); // Output: { key: "value" }


// Example 3: Using any in Arrays

  let mixedArray: any[] = [1, "two", true, { key: "value" }];

mixedArray.forEach(element => {
  console.log(element);
});
/* Output: 
 1
 two
 true
 { key: "value" } 
*/


// Example 4: Working with Dynamic JSON Data

// When dealing with data from an API that has a dynamic structure, 
// you might use any to temporarily hold the data before processing it.

const fetchData = (): any => {
    return {
      id: 1,
      name: "John",
      details: {
        age: 30,
        address: "123 Main St"
      }
    };
  };
  
  let data: any = fetchData();
  console.log(data.name);        // Output: John
  console.log(data.details.age); // Output: 30


 // Example 5: Type Assertions with any

 let someValue: any = "this is a string";

// Using type assertion
let strLength: number = (someValue as string).length;
console.log(strLength); // Output: 16

// Another syntax for type assertion
let strLength2: number = (<string>someValue).length;
console.log(strLength2); // Output: 16


// Example 6: Using any in Object Properties

interface User {
    id: number;
    info: any;
  }
  
  let user: User = {
    id: 1,
    info: {
      name: "Alice",
      age: 25
    }
  };
  
  console.log(user.info.name); // Output: Alice
  
  user.info = "Updated info";
  console.log(user.info); // Output: Updated info
/*
Type casting in TypeScript allows you to explicitly convert a variable from one type to another. 
This can be useful when you know more about the type of a value than TypeScript does. 
There are two main ways to perform type casting in TypeScript:
1. Using the as keyword
2. Using angle-bracket syntax
*/

// 1. Using the as keyword

let someValue: unknown = "This is a string";

let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16


// 2. Using Angle-Bracket Syntax

let anotherValue: any = "Another string";

let anotherStrLength: number = (<string>anotherValue).length;

console.log(anotherStrLength); // Output: 14


// 3. Type Casting with Interfaces

interface User {
    name: string;
    age: number;
  }
  
  let userObj: any = {
    name: "John",
    age: 30,
    extraProperty: "This property is not in the User interface"
  };
  
  let user: User = userObj as User;   // Ignore Extra Properties: Type casting allows userObj to have extra properties that are not part of the User interface. 
                                      // These extra properties will not cause any errors because TypeScript only checks that the required properties (name and age) are present.
  
  console.log(user.name); // Output: John
  console.log(user.age); // Output: 30


// 4. Type Casting with DOM Elements

let element = document.getElementById("myElement");

// Without type casting, TypeScript may not know the exact type of the element
if (element) {
  (element as HTMLInputElement).value = "Hello, TypeScript!";
}
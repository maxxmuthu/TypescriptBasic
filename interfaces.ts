/*
An interface in TypeScript is a way to define the shape of an object. 
It allows you to specify the properties and their types that an object must have.
*/

interface User {
    firstName: string;
    lastName: string;
    age: number;
    middleName?: string; // optional property
  }

  function greetUser(user: User): string {
    return `Hello, ${user.firstName} ${user.lastName}!`;
  }
  
  function logUserDetails(user: User): void {
    console.log(`User: ${user.firstName} ${user.lastName}, Age: ${user.age}`);
  }

const user1: User = { firstName: "John", lastName: "Doe", age: 30 };
const user2: User = { firstName: "Jane", lastName: "Doe", age: 25, middleName: "Marie" };

console.log(greetUser(user1)); // Output: Hello, John Doe!
logUserDetails(user2); // Output: User: Jane Doe, Age: 25

//==================================================

/*
function greetUser(user: {firstName:string, middleName:string, lastName:string}): string {
    return `Hello ${user.firstName} ${user.middleName} ${user.lastName}`;
  }
  
  function logUserDetails(user: {firstName:string, lastName:string, age:number}): void {
    console.log(`User: ${user.firstName} ${user.lastName}, Age: ${user.age}`);
  }
  
  let user1  = {firstName: "John", middleName: "Francis", lastName: "Doe"};
  let user2  = {firstName: "Jane", lastName: "Doe", age: 25};
  
  console.log(greetUser(user1)); // Output: Hello John Francis Doe
  logUserDetails(user2); // Output: User: Jane Doe, Age: 25

*/
//In the above commented code is how we use in javascript like calling same parameters in mutiple functions.
//Now this can recitified by using Interface
/*
Installation & Setup:
Step 1: Install TypeScript -> npm install -g typescript
Step 2: Verify Installation -> tsc -v
Step 3: [optional] -->  tsc .\basics.ts -> This command will generate a JavaScript file named basics.js in the same directory.
Step 4: [optional] --> Run the generated JavaScript file -> node .\basics.js
Step 5: Install ts-node -> npm install -g ts-node
Step 6: Run Your TypeScript File with ts-node --> ts-node .\basics.ts
*/

// In Typescript - we can't change the datatype, once it is defined.
// 1.) Strong Typing

let i:number;
let str:String;
let b:boolean;

i=50;
//i=str; --> this will not work because 'i' is integer and 'str' is string
str="Sample"
b=true;

console.log(i);
console.log(str);
console.log(b);

// 2.) Inferred Typing
// we can able to assign the values without mentioning the datatype also to the variables like javascript
// it will consider the datatype based on your values

let a = 200;
let word = "Tom is travelling"
// a=word; --> this will not work because 'a' is integer and 'word' is string

// 3.) Duck Typing

let complexType = { name : "myName", id : 1};  // {} - object, name & id - property, "myName" & 1 - values
/*
complexType = { id : 2};
complexType = { name : "myAnotherName"};
complexType = { address : "myAddress"};
*/
console.log(complexType);

// Commented section will accept in javascript by displaying the output as "{ address : "myAddress"}" by overwriting the value
// But however this will not accept in Typescript , structure type and datatype format should be the same.

// Again in Typescript, it will accept if the order is different.
complexType = { id : 2, name : "myName2"}; 
console.log(complexType);
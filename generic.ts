/*
Generics in functions allow you to create functions that can work with any data type 
while still maintaining type safety.

Generics in classes allow you to create a class that can handle various data types 
while still maintaining type safety.
*/

// 1. Simple Generic Function

function identity<T>(arg: T): T {
    return arg;
  }
  
  let output1 = identity<string>("Hello, TypeScript!"); // Output: Hello, TypeScript!
  let output2 = identity<number>(100); // Output: 100
  
  console.log(output1); // Hello, TypeScript!
  console.log(output2); // 100

// 2. Simple Generic Class

class Box<T> {
    contents: T;
  
    constructor(value: T) {
      this.contents = value;
    }
  
    getContents(): T {
      return this.contents;
    }
  }
  
  let stringBox = new Box<string>("Hello, TypeScript!");
  let numberBox = new Box<number>(100);
  
  console.log(stringBox.getContents()); // Hello, TypeScript!
  console.log(numberBox.getContents()); // 100


// 3. Generic Function with Multiple Type Parameters

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
  }
  
  let output3 = pair<string, number>("age", 30); // Output: ["age", 30]
  
  console.log(output3); // ["age", 30]


  // 4. Generic Class with Multiple Type Parameters

  class KeyValuePair<K, V> {
    key: K;
    value: V;
  
    constructor(key: K, value: V) {
      this.key = key;
      this.value = value;
    }
  
    display(): void {
      console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
  }
  
  let kvp = new KeyValuePair<string, number>("age", 30);
  kvp.display(); // Key: age, Value: 30
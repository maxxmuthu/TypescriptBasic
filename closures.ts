/*
Closures are a fundamental concept in JavaScript and TypeScript. 
A closure is created when a function is defined inside another function, 
and the inner function has access to the outer function's variables. 
This access persists even after the outer function has finished executing.
*/

// 1a. Basic Closure Example

function outerFunction() {
    let outerVariable = 'I am outside!';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction();
  closureFunction(); // Output: I am outside!

  //------------------------------------------

// 1b. Basic Closure Example

function outer_Function() {
    let outerVariable = 'I am outside!';
  
    function innerFunction1() {
      console.log(`Inner Function 1: ${outerVariable}`);
    }
  
    function innerFunction2() {
      console.log(`Inner Function 2: ${outerVariable}`);
    }
  
    return {
      innerFunction1,
      innerFunction2,
    };
  }
  
  const closureObject = outer_Function();
  closureObject.innerFunction1(); // Output: Inner Function 1: I am outside!
  closureObject.innerFunction2(); // Output: Inner Function 2: I am outside!

/*
1a.) return innerFunction;: Returns the function itself. Use when you need to return a single function that can be called directly.
1b.) return { innerFunction };: Returns an object containing the function as a property. 
     Use when you need to return multiple functions or additional properties and organize them within an object.
*/

  //============================================================================

 // 2. Practical Closure Example
 
 function createCounter() {
    let count = 0;
  
    return {
      increment: () => {
        count++;
        return count;
      },
      decrement: () => {
        count--;
        return count;
      },
      getCount: () => {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  console.log(counter.increment()); // Output: 1
  console.log(counter.increment()); // Output: 2
  console.log(counter.decrement()); // Output: 1
  console.log(counter.getCount()); // Output: 1


 // 3. Closure with Parameters

 function multiplyBy(factor: number) {
    return (x: number) => x * factor;
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15
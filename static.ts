/*
Static Methods
A static method is a function that belongs to the class itself and can be called on the class directly. 
It cannot be called on instances of the class.

Static Properties
A static property is a variable that belongs to the class itself and can be accessed on the class directly. 
Like static methods, it cannot be accessed on instances of the class.
*/

class MathUtil {
    // Static property for the value of PI
    static PI: number = 3.14159;
  
    // Static method to calculate the area of a circle
    static calculateCircleArea(radius: number): number {
      return MathUtil.PI * radius * radius;
    }
  
    // Static method to calculate the circumference of a circle
    static calculateCircumference(radius: number): number {
      return 2 * MathUtil.PI * radius;
    }
  }
  
  // Accessing static property directly from the class
  console.log(MathUtil.PI); // Output: 3.14159
  
  // Calling static methods directly from the class
  console.log(MathUtil.calculateCircleArea(5)); // Output: 78.53975
  console.log(MathUtil.calculateCircumference(5)); // Output: 31.4159
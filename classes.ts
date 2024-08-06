/*
Is a Constructor Mandatory for Class ?
1.) Optional: If your class does not need any special initialization or setup, you can omit the constructor. 
In such cases, TypeScript will provide a default constructor.
2.) With Properties: If your class has properties that need to be initialized with values passed 
during object creation, then you should include a constructor.
*/

// 1. Basic Class - Constructor
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Alice", 30);
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.


// 2. Basic Class - Without Constructor
  class Student {
    greet(): void {
      console.log("Hello!");
    }
  }
  
  const student = new Student();
  student.greet(); // Output: Hello!

// 3. Class - Access Modifiers
/*
Access Modifiers:
TypeScript provides three access modifiers: public, private, and protected.

1. Public: By default, all members of a class are public. This means they can be accessed from anywhere.
2. Private: Private members can only be accessed within the class they are declared.
3. Protected: Protected members can be accessed within the class and its subclasses.
*/

class Employee {
    private employeeName: string;
    protected employeeAge: number;
  
    constructor(employeeName: string, employeeAge: number) {
      this.employeeName = employeeName;
      this.employeeAge = employeeAge;
    }
  
    public greet(): void {
      console.log(`Hello, my name is ${this.employeeName} and I am ${this.employeeAge} years old.`);
    }
  }
  
  const employee1 = new Employee("Alice", 30);
  employee1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  // console.log(employee1.employeeName); // Error: Property 'employeeName' is private and only accessible within class 'Employee'.
  // console.log(employee1.employeeAge);  // Error: Property 'employeeAge' is protected and only accessible within class 'Employee' and its subclasses.


// 4. Inheritance 
// Base Class
class Animal {
    protected animalName: string;
    protected animalAge: number;
  
    constructor(animalName: string, animalAge: number) {
      this.animalName = animalName;
      this.animalAge = animalAge;
    }
  
    public makeSound(): void {
      console.log(`${this.animalName} makes a sound.`);
    }
  }

// Derived Class
class Dog extends Animal {
    private breed: string;
  
    constructor(animalName: string, animalAge: number, breed: string) {
      super(animalName, animalAge); // Call the constructor of the base class
      this.breed = breed;
    }
  
    public bark(): void {
      console.log(`${this.animalName}, the ${this.breed}, barks.`);
    }
  }
  
  const dog = new Dog("Buddy", 3, "Golden Retriever");
  dog.makeSound(); // Output: Buddy makes a sound.
  dog.bark(); // Output: Buddy, the Golden Retriever, barks.

/*
The parent class (also known as the base class or superclass) is Animal.
The child class (also known as the derived class or subclass) is Dog.
*/


// 5. Getters and Setters
class Car {
    private carMake: string;
    private carModel: string;
    private carYear: number;
  
    constructor(carMake: string, carModel: string, carYear: number) {
      this.carMake = carMake;
      this.carModel = carModel;
      this.carYear = carYear;
    }
  
    // Getter for carMake
    get make(): string {
      return this.carMake;
    }
  
    // Setter for carMake
    set make(newMake: string) {
      this.carMake = newMake;
    }
  
    // Getter for carModel
    get model(): string {
      return this.carModel;
    }
  
    // Setter for carModel
    set model(newModel: string) {
      this.carModel = newModel;
    }
  
    // Getter for carYear
    get year(): number {
      return this.carYear;
    }
  
    // Setter for carYear
    set year(newYear: number) {
      if (newYear > 0) {
        this.carYear = newYear;
      } else {
        console.log("Invalid year");
      }
    }
  }
  
  // Create an instance of Car
  const myCar = new Car("Toyota", "Camry", 2020);
  
  // Get values using getters
  console.log(`My car is a ${myCar.make} ${myCar.model} from ${myCar.year}`);
  
  // Set values using setters
  myCar.make = "Honda";
  myCar.model = "Accord";
  myCar.year = 2022;
  
  console.log(`My updated car is a ${myCar.make} ${myCar.model} from ${myCar.year}`);


// 6. Static Members
class MathOperation {
    // Static property
    static PI: number = 3.14159;
  
    // Static method to calculate the circumference of a circle
    static calculateCircumference(radius: number): number {
      return 2 * this.PI * radius;
    }
  
    // Static method to calculate the area of a circle
    static calculateArea(radius: number): number {
      return this.PI * radius * radius;
    }
  }
  
  // Using the static property PI
  console.log(`Value of PI: ${MathOperation.PI}`);
  
  // Using static methods to calculate circumference and area
  const radius = 5;
  console.log(`Circumference of a circle with radius ${radius}: ${MathOperation.calculateCircumference(radius)}`);
  console.log(`Area of a circle with radius ${radius}: ${MathOperation.calculateArea(radius)}`);
/*
Intersection types in TypeScript allow you to combine multiple types into a single type. 
This means that the resulting type will have all the properties and methods of the combined types. 
It’s a way to merge multiple types into one.
*/

// Example 1 

interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

// Intersection type
type PersonEmployee = Person & Employee;


let personEmployee: PersonEmployee = {
    name: "Alice",
    age: 30,
    employeeId: 12345,
    department: "HR"
};

console.log(personEmployee);


//======================================================

// Example 2

interface CanRead {
    read(): void;
}

interface CanWrite {
    write(): void;
}

// Intersection type
type ReadWrite = CanRead & CanWrite;

// Class Implementation:
class Documents implements ReadWrite {
    read() {
        console.log("Reading document...");
    }

    write() {
        console.log("Writing document...");
    }
}

let doc = new Documents();
doc.read();  // Output: Reading document...
doc.write(); // Output: Writing document...
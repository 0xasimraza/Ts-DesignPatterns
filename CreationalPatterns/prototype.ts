// example 1

interface IProtoType {
  // interface with clone method
  clone(): this
  // The clone is deep or shallow.
  // It is up to you how you want to implement
  // the details in your concrete class
}

class MyClass implements IProtoType {
  // A Concrete Class
  field: number[]

  constructor(field: number[]) {
    this.field = field // any value of any type
  }

  clone() {
    return Object.assign({}, this) // shallow copy
    // return JSON.parse(JSON.stringify(this)); //deep copy
  }
}

// The Client
// Create an object containing an array
const OBJECT1 = new MyClass([1, 2, 3, 4])
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)

const OBJECT2 = OBJECT1.clone() // Clone
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
// Change the value of one of the array elements in OBJECT2
// Depending on your clone method, either a shallow or deep copy
// was performed
OBJECT2.field[1] = 101

// Comparing OBJECT1 and OBJECT2
console.log(`OBJECT2: ${JSON.stringify(OBJECT2)}`)
console.log(`OBJECT1: ${JSON.stringify(OBJECT1)}`)

// example 2
// class Person {
//   name: string;
//   age: number;
//   gender: string;

//   shakeHand(): void {
//     console.log(`${this.name} is shaking hand`);
//   }
// }

// class PersonPrototype {
//   prototye: Person;
//   constructor(proto: Person) {
//     this.prototye = proto;
//   }

//   clone(): Person {
//     const ins = new Person();
//     ins.age = this.prototye.age;
//     ins.gender = this.prototye.gender;
//     ins.name = this.prototye.name;
//     return ins;
//   }
// }

// class Applicaion {
//   main(): void {
//     const person = new Person();
//     person.name = "John Doe";
//     person.age = 40;
//     person.gender = "male";

//     const personProto = new PersonPrototype(person);
//     const otherPersonIns = personProto.clone();

//     otherPersonIns.shakeHand();
//   }
// }

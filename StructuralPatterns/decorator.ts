// example 1

// Decorator Concept Sample Code

interface IComponent {
  method(): string
}

class Component implements IComponent {
  method(): string {
    return 'Component Method'
  }
}

class Decorator implements IComponent {
  #object: IComponent

  constructor(object: IComponent) {
    this.#object = object
  }

  method(): string {
    return `Decorator Method(${this.#object.method()})`
  }
}

// The Client
const COMPONENT = new Component()
console.log(COMPONENT.method())

// The component can be decorated
const Decorated = new Decorator(COMPONENT)
console.log(Decorated.method())

// The decorated component can be decorated again
const Decorated2 = new Decorator(Decorated)
console.log(Decorated2.method())

// example 2

// class User {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   say(): void {
//     console.log(`User ${this.name}`);
//   }
// }

// class DecoratedUser {
//   user: User;
//   name: string;
//   city: string;
//   street: string;

//   constructor(user: User, city: string, street: string) {
//     this.user = user;
//     this.name = user.name; // ensures interface stays the same
//     this.city = city;
//     this.street = street;
//   }

//   say(): void {
//     console.log(`Decorated User ${this.name} ${this.city} ${this.street}`);
//   }
// }

// class Application {
//   main(): void {
//     const user = new User("John");
//     user.say();

//     var decorated = new DecoratedUser(user, "Broadway", "New York");
//     decorated.say();
//   }
// }

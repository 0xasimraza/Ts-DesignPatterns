// example 1
// Memento pattern concept

class Memento {
  // A container of state
  state: string
  constructor(state: string) {
    this.state = state
  }
}

class Originator {
  // The Object in the application whose state changes

  #state: string

  constructor() {
    this.#state = ''
  }

  public get state(): string {
    return this.#state
  }

  public set state(value: string) {
    this.#state = value
    console.log(`Originator: Set state to '${value}'`)
  }

  public get memento(): Memento {
    console.log(
      'Originator: Providing Memento of state to caretaker.'
    )
    return new Memento(this.#state)
  }

  public set memento(value: Memento) {
    this.#state = value.state
    console.log(
      `Originator: State after restoring from Memento: '${this.#state
      }'`
    )
  }
}

class CareTaker {
  // Guardian. Provides a narrow interface to the mementos

  #originator: Originator
  #mementos: Memento[]

  constructor(originator: Originator) {
    this.#originator = originator
    this.#mementos = []
  }

  create() {
    // Store a new Memento of the Originators current state
    console.log(
      'CareTaker: Getting a copy of Originators current state'
    )
    const memento = this.#originator.memento
    this.#mementos.push(memento)
  }

  restore(index: number) {
    // Replace the Originators current state with the state stored in the saved Memento
    console.log('CareTaker: Restoring Originators state from Memento')
    const memento = this.#mementos[index]
    this.#originator.memento = memento
  }
}

// The Client
const ORIGINATOR = new Originator()
const CARETAKER = new CareTaker(ORIGINATOR)

// originators state can change periodically due to application events
ORIGINATOR.state = 'State #1'
ORIGINATOR.state = 'State #2'

// lets backup the originators
CARETAKER.create()

// more changes, and then another backup
ORIGINATOR.state = 'State #3'
CARETAKER.create()

// more changes
ORIGINATOR.state = 'State #4'
console.log(ORIGINATOR.state)

// restore from first backup
CARETAKER.restore(0)
console.log(ORIGINATOR.state)

// restore from second backup
CARETAKER.restore(1)
console.log(ORIGINATOR.state)

// example 2
// class Person {
//   name: string;
//   street: string;
//   city: string;
//   state: string;

//   constructor(name: string, street: string, city: string, state: string) {
//     this.name = name;
//     this.street = street;
//     this.city = city;
//     this.state = state;
//   }

//   hydrate(): string {
//     const memento = JSON.stringify(this);
//     return memento;
//   }

//   dehydrate(memento: string): void {
//     const m = JSON.parse(memento);
//     this.name = m.name;
//     this.street = m.street;
//     this.city = m.city;
//     this.state = m.state;
//   }
// }

// class CareTaker {
//   mementos: { [key: string]: string } = {};

//   add(key: number, memento: string) {
//     this.mementos[key] = memento;
//   }

//   get(key: number): string {
//     return this.mementos[key];
//   }
// }

// class Application {
//   main(): void {
//     var mike = new Person("John Doe", "11 main", "Shiraz", "Fars");
//     var john = new Person("Jane Doe", "12th street", "Shiraz", "Fars");

//     var caretaker = new CareTaker();

//     caretaker.add(1, mike.hydrate());
//     caretaker.add(2, john.hydrate());

//     // mess up their names

//     mike.name = "King Kong";
//     john.name = "Superman";

//     // restore original state

//     mike.dehydrate(caretaker.get(1));
//     john.dehydrate(caretaker.get(2));
//   }
// }

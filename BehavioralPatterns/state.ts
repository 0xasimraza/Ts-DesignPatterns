
// example 1
// The State Pattern Concept

class Context {
  // This is the object whose behavior will change
  #stateHandles: IState[]
  #handle: IState | undefined

  constructor() {
    this.#stateHandles = [
      new ConcreteStateA(),
      new ConcreteStateB(),
      new ConcreteStateC(),
    ]
    this.#handle = undefined
  }

  request() {
    // A method of the state that dynamically changes which
    // class it uses depending on the value of this.#handle
    this.#handle = this.#stateHandles[Math.floor(Math.random() * 3)]
    return this.#handle
  }
}

interface IState {
  // A State Interface
  toString(): string
}

class ConcreteStateA implements IState {
  // A ConcreteState Subclass

  toString() {
    return 'I am ConcreteStateA'
  }
}

class ConcreteStateB implements IState {
  // A ConcreteState Subclass

  toString() {
    return 'I am ConcreteStateB'
  }
}

class ConcreteStateC implements IState {
  // A ConcreteState Subclass

  toString() {
    return 'I am ConcreteStateC'
  }
}

// The Client
const CONTEXT = new Context()
console.log(CONTEXT.request())
console.log(CONTEXT.request())
console.log(CONTEXT.request())
console.log(CONTEXT.request())
console.log(CONTEXT.request())

// example 2
// interface IColor {
//   light: TrafficLight;
//   go: () => void;
// }

// class TrafficLight {
//   count: number;
//   currentState: IColor = new Red(this);

//   change(state: IColor): void {
//     if (this.count++ >= 10) return;
//     this.currentState = state;
//     this.currentState.go();
//   }

//   start(): void {
//     this.currentState.go();
//   }
// }

// class Yellow implements IColor {
//   light: TrafficLight;

//   constructor(light: TrafficLight) {
//     this.light = light;
//   }

//   go(): void {
//     console.log("Yellow --> for 10 seconds");
//     this.light.change(new Red(this.light));
//   }
// }

// class Green implements IColor {
//   light: TrafficLight;

//   constructor(light: TrafficLight) {
//     this.light = light;
//   }

//   go(): void {
//     console.log("Green --> for 1 minute");
//     this.light.change(new Yellow(this.light));
//   }
// }

// class Red implements IColor {
//   light: TrafficLight;

//   constructor(light: TrafficLight) {
//     this.light = light;
//   }

//   go(): void {
//     console.log("Red --> for 1 minute");
//     this.light.change(new Green(this.light));
//   }
// }

// class Application {
//   main(): void {
//     const light = new TrafficLight();
//     light.start();
//   }
// }

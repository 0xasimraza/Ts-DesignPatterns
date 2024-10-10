// example 1
// The Flyweight Concept

interface IFlyweight {
  code: number
}

class Flyweight implements IFlyweight {
  // The Concrete Flyweight
  code: number
  constructor(code: number) {
    this.code = code
  }
}

class FlyweightFactory {
  // Creating the FlyweightFactory as a static class

  static flyweights: { [id: number]: Flyweight } = {}

  static getFlyweight(code: number): Flyweight {
    // A static method to get a flyweight based on a code
    if (!(code in FlyweightFactory.flyweights)) {
      FlyweightFactory.flyweights[code] = new Flyweight(code)
    }
    return FlyweightFactory.flyweights[code]
  }

  static getCount(): number {
    // Return the number of flyweights in the cache
    return Object.keys(FlyweightFactory.flyweights).length
  }
}

class AppContext {
  // An example context that holds references to the flyweights in a
  // particular order and converts the code to an ascii letter
  private codes: number[] = []

  constructor(codes: string) {
    for (let i = 0; i < codes.length; i++) {
      this.codes.push(codes.charCodeAt(i))
    }
  }

  output() {
    // The context specific output that uses flyweights
    let ret = ''
    this.codes.forEach((c) => {
      ret =
        ret +
        String.fromCharCode(FlyweightFactory.getFlyweight(c).code)
    })

    return ret
  }
}

// The Client
const APP_CONTEXT = new AppContext('abracadabra')

// use flyweights in a context
console.log(APP_CONTEXT.output())

console.log(`abracadabra has ${'abracadabra'.length} letters`)
console.log(
  `FlyweightFactory has ${FlyweightFactory.getCount()} flyweights`
)

// example 2

// class FlyWeight {
//   make: string;
//   model: string;
//   processor: string;

//   constructor(make: string, model: string, processor: string) {
//     this.make = make;
//     this.model = model;
//     this.processor = processor;
//   }
// }

// class FlyWeightFactory {
//   private static flyWeights: { [key: string]: FlyWeight } = {};

//   static get(make: string, model: string, processor: string) {
//     const key = this.getKey(model, make);
//     if (key in this.flyWeights) {
//       this.flyWeights[key] = new FlyWeight(make, model, processor);
//     }
//     return this.flyWeights[key];
//   }

//   static getCount(): number {
//     return Object.keys(this.flyWeights).length;
//   }

//   private static getKey(model: string, make: string): string {
//     return make + model;
//   }
// }

// class ComputerCollection {
//   computers: { [key: string]: Computer } = {};
//   count: number = 0;

//   add(
//     make: string,
//     model: string,
//     processor: string,
//     memory: string,
//     tag: string
//   ): void {
//     this.computers[tag] = new Computer(make, model, processor, memory, tag);
//     this.count++;
//   }

//   get(tag: string): Computer {
//     return this.computers[tag];
//   }

//   getCount(): number {
//     return this.count;
//   }
// }

// class Computer {
//   flyWeight: FlyWeight;
//   model: string;
//   processor: string;
//   memory: string;
//   tag: string;

//   constructor(
//     make: string,
//     model: string,
//     processor: string,
//     memory: string,
//     tag: string
//   ) {
//     this.flyWeight = FlyWeightFactory.get(make, model, processor);
//     this.memory = memory;
//     this.tag = tag;
//   }

//   getMake() {
//     return this.flyWeight.make;
//   }
//   // ...
// }

// class Application {
//   main(): void {
//     const computers = new ComputerCollection();

//     computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
//     computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
//     computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
//     computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
//     computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
//     computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
//     computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

//     console.log("Computers: ", computers.getCount());
//     console.log("Flyweights: ", FlyWeightFactory.getCount());
//   }
// }

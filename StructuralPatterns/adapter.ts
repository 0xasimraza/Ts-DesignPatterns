// example 1

// Adapter Concept Sample Code

interface IA {
  methodA(): void
}

class ClassA implements IA {
  methodA() {
    console.log('method A')
  }
}

interface IB {
  methodB(): void
}

class ClassB implements IB {
  methodB() {
    console.log('method B')
  }
}

class ClassBAdapter implements IA {
  // ClassB does not have a methodA, so we can create an adapter

  #classB: ClassB

  constructor() {
    this.#classB = new ClassB()
  }

  methodA() {
    'calls the class b method_b instead'
    this.#classB.methodB()
  }
}

// The Client
// Before the adapter I need to test the objects class to know which
// method to call.
const ITEMS = [new ClassA(), new ClassB()]
ITEMS.forEach((item) => {
  if (item instanceof ClassB) {
    item.methodB()
  } else {
    item.methodA()
  }
})

// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
const ADAPTED = [new ClassA(), new ClassBAdapter()]
ADAPTED.forEach((item) => {
  item.methodA()
})

// example 2
// class Shipping {
//   request(address: string, zip: number): string {
//     //do something ...
//     return "10$";
//   }
// }

// //new interface
// class AdvancedShipping {
//   login(credentials: Credentials): boolean {
//     return true;
//   }
//   calculate(address: string, zip: number): number {
//     return 10;
//   }
// }

// class Credentials {
//   username: string;
//   password: string;

//   constructor(user: string, pass: string) {
//     this.username = user;
//     this.password = pass;
//   }
// }

// class ShippingAdapter {
//   instance: AdvancedShipping;
//   constructor( credentials: Credentials) {
//     this.instance = new AdvancedShipping();
//     this.instance.login(credentials);
//   }

//   request(address: string, zip: number): string {
//     return this.instance.calculate(address,zip) + "$";
//   }
// }

// class Application {
//   main(): void {
//     const shipping = new Shipping();
//     const credentials = new Credentials("John", "1234");
//     const adapter = new ShippingAdapter(credentials);

//     //old interface
//     const cost = shipping.request("first st", 123456);

//     //new interface
//     const newCost = adapter.request("first st", 123456);
//   }
// }

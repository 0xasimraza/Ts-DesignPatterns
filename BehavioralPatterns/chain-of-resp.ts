// example 1
// The Chain Of Responsibility Pattern Concept

interface IHandler {
    // The Handler Interface that the Successors should implement
    handle(payload: number): number
}

class Successor1 implements IHandler {
    // A Concrete Handler
    handle(payload: number) {
        console.log(`Successor1 payload = ${payload}`)
        const test = Math.floor(Math.random() * 2) + 1
        if (test === 1) {
            payload += 1
            payload = new Successor1().handle(payload)
        } else {
            payload -= 1
            payload = new Successor2().handle(payload)
        }
        return payload
    }
}

class Successor2 implements IHandler {
    // A Concrete Handler
    handle(payload: number) {
        console.log(`Successor2 payload = ${payload}`)
        const test = Math.floor(Math.random() * 3) + 1
        if (test === 1) {
            payload = payload * 2
            payload = new Successor1().handle(payload)
        } else if (test === 2) {
            payload = payload / 2
            payload = new Successor2().handle(payload)
        } // if test = 3 then assign no further successors
        return payload
    }
}

class Chain {
    // A chain with a default first successor
    start(payload: number) {
        // Setting the first successor that will modify the payload
        return new Successor1().handle(payload)
    }
}

// The Client
const CHAIN = new Chain()
const PAYLOAD = 1
const OUT = CHAIN.start(PAYLOAD)
console.log(`Finished result = ${OUT}`)

// example 2
// class MyRequest {
//   amount: number;
//   constructor(amount: number) {
//     this.amount = amount;
//     console.log("Requested: $" + amount + "\n");
//   }

//   get(bill: number) {
//     const count = Math.floor(this.amount / bill);
//     this.amount -= count * bill;
//     console.log("Dispense " + count + " $" + bill + " bills");
//     return this;
//   }
// }

// class Application {
//   main(): void {
//     const request = new MyRequest(378);
//     request.get(100).get(50).get(20).get(10).get(5).get(1);
//   }
// }

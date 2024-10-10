// example 1
// The Iterator Pattern Concept

interface IIterator {
  next(): IAggregate
  // Return the object in collection

  hasNext(): boolean
  // Returns Boolean whether at end of collection or not
}

class IteratorConcept implements IIterator {
  // The concrete iterator (iterable)
  index: number
  aggregates: IAggregate[]

  constructor(aggregates: IAggregate[]) {
      this.index = 0
      this.aggregates = aggregates
  }

  next() {
      if (this.index < this.aggregates.length) {
          const aggregate = this.aggregates[this.index]
          this.index += 1
          return aggregate
      }
      throw new Error('At End of Iterator')
  }

  hasNext() {
      return this.index < this.aggregates.length
  }
}

interface IAggregate {
  // An interface that the aggregates should implement
  method(): void
}

class Aggregate implements IAggregate {
  // A concrete object
  method(): void {
      console.log('This method has been invoked')
  }
}

// The Client
const AGGREGATES = [
  new Aggregate(),
  new Aggregate(),
  new Aggregate(),
  new Aggregate(),
]

// AGGREGATES is an array that is already iterable by default.
// but we can create own own iterator on top anyway.
const ITERABLE = new IteratorConcept(AGGREGATES)

while (ITERABLE.hasNext()) {
  ITERABLE.next().method()
}

// example 2
// class Iterator<T> {
//   items: T[];
//   index: number = 0;

//   constructor(items: T[]) {
//     this.items = items;
//   }

//   first(): T {
//     this.reset();
//     return this.next();
//   }
//   next(): T {
//     return this.items[this.index++];
//   }
//   hasNext(): boolean {
//     return this.index <= this.items.length;
//   }
//   reset(): void {
//     this.index = 0;
//   }
//   each(callback: Function) {
//     for (var item = this.first(); this.hasNext(); item = this.next()) {
//       callback(item);
//     }
//   }
// }

// class Application {
//   main(): void {
//     var items: string[] = ["one", "circle", "Applepie"];
//     var iter = new Iterator<string>(items);

//     // using for loop

//     for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
//       console.log(item);
//     }

//     // using Iterator's each method

//     iter.each(function (item: string) {
//       console.log(item);
//     });
//   }
// }

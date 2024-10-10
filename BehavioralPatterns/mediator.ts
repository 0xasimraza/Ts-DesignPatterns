// example 1
// Mediator Concept Sample Code

class Mediator {
  // The Mediator Concrete Class
  colleague1: Colleague1
  colleague2: Colleague2

  constructor() {
      this.colleague1 = new Colleague1()
      this.colleague2 = new Colleague2()
  }

  colleague1Method() {
      // Calls the method provided by Colleague1
      return this.colleague1.method1()
  }

  colleague2Method() {
      // Calls the method provided by Colleague2
      return this.colleague2.method2()
  }
}

class Colleague1 {
  // This Colleague provides data for Colleague2

  method1() {
      return 'Here is the Colleague1 specific data you asked for'
  }
}

class Colleague2 {
  // This Colleague provides data for Colleague1

  method2() {
      return 'Here is the Colleague2 specific data you asked for'
  }
}

// The Client
const MEDIATOR = new Mediator()

// Colleague1 wants some data from Colleague2
let DATA = MEDIATOR.colleague2Method()
console.log(`COLLEAGUE1 <--> ${DATA}`)

// Colleague2 wants some data from Colleague1
DATA = MEDIATOR.colleague1Method()
console.log(`COLLEAGUE2 <--> ${DATA}`)

// example 2

// class Participant {
//   name: string;
//   chatRoom: Chatroom;

//   constructor(name: string) {
//     this.name = name;
//   }

//   receive(message: string, from: Participant): void {
//     console.log(from.name + " to " + this.name + ": " + message);
//   }

//   send(message: string, to?: Participant): void {
//     this.chatRoom.send(message, this, to);
//   }
// }

// class Chatroom {
//   participants: { [key: string]: Participant } = {};

//   register(participant: Participant): void {
//     this.participants[participant.name] = participant;
//     participant.chatRoom = this;
//   }

//   send(message: string, from: Participant, to?: Participant) {
//     if (to) {
//       // single message
//       to.receive(message, from);
//     } else {
//       // broadcast message
//       for (const key in this.participants) {
//         if (this.participants[key] !== from) {
//           this.participants[key].receive(message, from);
//         }
//       }
//     }
//   }
// }

// class Application {
//   main(): void {
//     var yoko = new Participant("Yoko");
//     var john = new Participant("John");
//     var paul = new Participant("Paul");
//     var ringo = new Participant("Ringo");

//     var chatroom = new Chatroom();
    
//     chatroom.register(yoko);
//     chatroom.register(john);
//     chatroom.register(paul);
//     chatroom.register(ringo);

//     yoko.send("All you need is love.");
//     yoko.send("I love you John.");
//     john.send("Hey, no need to broadcast", yoko);
//     paul.send("Ha, I heard that!");
//     ringo.send("Paul, what do you think?", paul);
//   }
// }

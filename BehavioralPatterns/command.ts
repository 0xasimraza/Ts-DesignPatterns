// example 1
// The Command Pattern Concept

interface ICommand {
  execute(): void
}

class Invoker {
  // The Invoker Class
  #commands: { [id: string]: ICommand }

  constructor() {
    this.#commands = {}
  }

  register(commandName: string, command: ICommand) {
    // Register commands in the Invoker
    this.#commands[commandName] = command
  }

  execute(commandName: string) {
    // Execute any registered commands
    if (commandName in this.#commands) {
      this.#commands[commandName].execute()
    } else {
      console.log(`Command [${commandName}] not recognised`)
    }
  }
}

class Receiver {
  // The Receiver

  runCommand1() {
    // A set of instructions to run
    console.log('Executing Command 1')
  }

  runCommand2() {
    // A set of instructions to run
    console.log('Executing Command 2')
  }
}

class Command1 implements ICommand {
  // A Command object, that implements the ICommand interface and
  // runs the command on the designated receiver

  #receiver: Receiver

  constructor(receiver: Receiver) {
    this.#receiver = receiver
  }

  execute() {
    this.#receiver.runCommand1()
  }
}

class Command2 implements ICommand {
  // A Command object, that implements the ICommand interface and
  // runs the command on the designated receiver

  #receiver: Receiver

  constructor(receiver: Receiver) {
    this.#receiver = receiver
  }

  execute() {
    this.#receiver.runCommand2()
  }
}

// The Client
// Create a receiver
const RECEIVER = new Receiver()

// Create Commands
const COMMAND1 = new Command1(RECEIVER)
const COMMAND2 = new Command2(RECEIVER)

// Register the commands with the invoker
const INVOKER = new Invoker()
INVOKER.register('1', COMMAND1)
INVOKER.register('2', COMMAND2)

// Execute the commands that are registered on the Invoker
INVOKER.execute('1')
INVOKER.execute('2')
INVOKER.execute('1')
INVOKER.execute('2')

// example 2
// function add(x, y) {
//   return x + y;
// }
// function sub(x, y) {
//   return x - y;
// }
// function mul(x, y) {
//   return x * y;
// }
// function div(x, y) {
//   return x / y;
// }

// class Command {
//   execute: Function;
//   undo: Function;
//   value: number;
//   constructor(execute: Function, undo: Function, value: number) {
//     this.execute = execute;
//     this.undo = undo;
//     this.value = value;
//   }
// }

// class Add extends Command {
//   constructor(value: number) {
//     super(add, sub, value);
//   }
// }

// class Sub extends Command {
//   constructor(value: number) {
//     super(add, sub, value);
//   }
// }

// class Mul extends Command {
//   constructor(value: number) {
//     super(add, sub, value);
//   }
// }

// class Div extends Command {
//   constructor(value: number) {
//     super(add, sub, value);
//   }
// }

// class Calculator {
//   current: number = 0;
//   commands: Command[] = [];

//   action(command?: Command) {
//     if (!command) {
//       return;
//     }
//     var name = command.execute.toString().substr(9, 3);
//     return name.charAt(0).toUpperCase() + name.slice(1);
//   }

//   execute(command: Command): void {
//     this.current = command.execute(this.current, command.value);
//     this.commands.push(command);
//     console.log(this.action(command) + ": " + command.value);
//   }

//   undo(): void {
//     const command = this.commands.pop();
//     this.current = command?.undo(this.current, command.value);
//     console.log("Undo " + this.action(command) + ": " + command?.value);
//   }

//   getCurrentValue(): number {
//     return this.current;
//   }
// }

// class Application {
//   main(): void {
//     {
//       var calculator = new Calculator();

//       // issue commands

//       calculator.execute(new Add(100));
//       calculator.execute(new Sub(24));
//       calculator.execute(new Mul(6));
//       calculator.execute(new Div(2));

//       // reverse last two commands

//       calculator.undo();
//       calculator.undo();

//       console.log("\nValue: " + calculator.getCurrentValue());
//     }
//   }
// }

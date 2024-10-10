// example 1
// The Interpreter Pattern Concept

interface IAbstractExpression {
  // All Terminal and Non-Terminal expressions will implement
  // an `interpret` method
  interpret(): number
}

class Numeral implements IAbstractExpression {
  // Terminal Expression

  value: number

  constructor(value: string) {
    this.value = parseInt(value)
  }

  interpret(): number {
    return this.value
  }
}

class Add implements IAbstractExpression {
  // Non-Terminal Expression.
  left: IAbstractExpression
  right: IAbstractExpression

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left
    this.right = right
  }

  interpret() {
    return this.left.interpret() + this.right.interpret()
  }
}

class Subtract implements IAbstractExpression {
  // Non-Terminal Expression.
  left: IAbstractExpression
  right: IAbstractExpression

  constructor(left: IAbstractExpression, right: IAbstractExpression) {
    this.left = left
    this.right = right
  }

  interpret() {
    return this.left.interpret() - this.right.interpret()
  }
}

// The Client
// The sentence complies with a simple grammar of
// Number -> Operator -> Number -> etc,
const SENTENCE = '5 + 4 - 3 + 7 - 2'
console.log(SENTENCE)

// Split the sentence into individual expressions that will be added to
// an Abstract Syntax Tree(AST) as Terminal and Non - Terminal expressions
const TOKENS = SENTENCE.split(' ')
console.log(JSON.stringify(TOKENS))

// Manually Creating an Abstract Syntax Tree from the tokens
const AST: IAbstractExpression[] = [] // An array of AbstractExpressions
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))) // 5 + 4
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))) // ^ - 3
AST.push(new Add(AST[1], new Numeral(TOKENS[6]))) // ^ + 7
AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))) // ^ - 2

// Use the final AST row as the root node.
const AST_ROOT = AST.pop()

// Interpret recursively through the full AST starting from the root.
console.log((AST_ROOT as IAbstractExpression).interpret())

// Print out a representation of the AST_ROOT
console.dir(AST_ROOT, { depth: null })

// example 2

// class Context {
//   input: string;
//   output: number = 0;

//   constructor(input: string) {
//     this.input = input;
//   }

//   startsWith(str: string) {
//     return this.input.startsWith(str);
//   }
// }

// class Expression {
//   name: string;
//   one: string;
//   four: string;
//   five: string;
//   nine: string;
//   multiplier: number;

//   constructor(
//     name: string,
//     one: string,
//     four: string,
//     five: string,
//     nine: string,
//     multiplier: number
//   ) {
//     this.name = name;
//     this.one = one;
//     this.four = four;
//     this.five = five;
//     this.nine = nine;
//     this.multiplier = multiplier;
//   }

//   interpret(context: Context) {
//     if (context.input.trim().length == 0) {
//       return;
//     } else if (context.input.startsWith(this.nine)) {
//       context.output += 9 * this.multiplier;
//       context.input = context.input.substr(2);
//     } else if (context.input.startsWith(this.four)) {
//       context.output += 4 * this.multiplier;
//       context.input = context.input.substr(2);
//     } else if (context.input.startsWith(this.five)) {
//       context.output += 5 * this.multiplier;
//       context.input = context.input.substr(1);
//     }

//     while (context.input.startsWith(this.one)) {
//       context.output += 1 * this.multiplier;
//       context.input = context.input.substr(1);
//     }
//   }
// }

// class Application {
//   main(): void {
//     const roman = "MCMXXVIII";
//     const context = new Context(roman);
//     const tree: Expression[] = [];

//     tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
//     tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
//     tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
//     tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

//     for (var i = 0, len = tree.length; i < len; i++) {
//       tree[i].interpret(context);
//     }

//     console.log(roman + " = " + context.output);
//   }
// }

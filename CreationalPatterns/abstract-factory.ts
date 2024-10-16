// example 1

export interface IProductA {
  name: string
}

class ConcreteProduct implements IProductA {
  name = ''
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'FactoryA:ConcreteProductA'
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'FactoryA:ConcreteProductB'
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'FactoryA:ConcreteProductC'
  }
}

export class FactoryA {
  static getObject(some_property: string): IProductA {
    try {
      if (some_property === 'a') {
        return new ConcreteProductA()
      } else if (some_property === 'b') {
        return new ConcreteProductB()
      } else if (some_property === 'c') {
        return new ConcreteProductC()
      } else {
        throw new Error('Class Not Found')
      }
    } catch (e) {
      console.log(e)
    }
    return new ConcreteProduct()
  }
}

//example 2

// interface IButton {
//   paint: () => void;
// }

// interface ICheckBox {
//   paint: () => void;
// }

// class WinButton implements IButton {
//   paint(): void {
//     //render button in windows style
//   }
// }

// class WinCheckBox implements ICheckBox {
//   paint(): void {
//     //render checkbox in windows style
//   }
// }

// class MacButton implements IButton {
//   paint(): void {
//     //render button in mac style
//   }
// }

// class MacCheckBox implements ICheckBox {
//   paint(): void {
//     //render checkbox in mac style
//   }
// }

// interface GUIFactory {
//   createButton: () => IButton;
//   createCheckBox: () => ICheckBox;
// }

// class WinFactory implements GUIFactory {
//   createButton(): IButton {
//     return new WinButton();
//   }
//   createCheckBox(): ICheckBox {
//     return new WinCheckBox();
//   }
// }

// class MacFactory implements GUIFactory {
//   createButton(): IButton {
//     return new MacButton();
//   }
//   createCheckBox(): ICheckBox {
//     return new MacCheckBox();
//   }
// }

// class Application {
//   button: IButton;
//   factory: GUIFactory;

//   constructor(guiFactory: GUIFactory) {
//     this.factory = guiFactory;
//   }

//   createUI(): void {
//     this.button = this.factory.createButton();
//   }

//   paint(): void {
//     this.button.paint();
//   }
// }

// class ApplicationConfigurator {
//   configuration: any;

//   constructor(config: any) {
//     this.configuration = config;
//   }

//   main(): void {
//     let factory: GUIFactory;

//     switch (this.configuration.OS) {
//       case "windows":
//         factory = new WinFactory();
//         break;
//       case "mac":
//         factory = new MacFactory();
//         break;
//       default:
//         throw new Error("Invalid OS");
//     }
//     const app = new Application(factory);
//     app.createUI();
//     app.paint();
//   }
// }

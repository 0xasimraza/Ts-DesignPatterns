// example 1 

// The Composite pattern concept

interface ICompositeComponent {
  // A component interface describing the common
  // fields and methods of leaves and composites
  name: string // A name for this component
  referenceToParent?: Composite
  method(): void // A method each Leaf and composite container should implement
  detach(): void // Called before a leaf is attached to a composite
}

class Leaf implements ICompositeComponent {
  // A Leaf can be added to a composite, but not a leaf
  referenceToParent?: Composite = undefined
  name: string
  constructor(name: string) {
      this.name = name
  }

  method(): void {
      const parent = this.referenceToParent
          ? this.referenceToParent.name
          : 'none'
      console.log(`<Leaf>\t\tname:${this.name}\tParent:\t${parent}`)
  }

  detach(): void {
      'Detaching this leaf from its parent composite'
      if (this.referenceToParent) {
          this.referenceToParent.delete(this)
      }
  }
}

class Composite implements ICompositeComponent {
  // A composite can contain leaves and composites

  referenceToParent?: Composite
  components: ICompositeComponent[]
  name: string

  constructor(name: string) {
      this.name = name
      this.components = []
  }

  method(): void {
      const parent = this.referenceToParent
          ? this.referenceToParent.name
          : 'none'
      console.log(
          `<Composite>\tname:${this.name}\tParent:\t${parent}\tComponents:${this.components.length}`
      )
      this.components.forEach((component) => {
          component.method()
      })
  }

  attach(component: ICompositeComponent): void {
      // Detach leaf / composite from any current parent reference and
      // then set the parent reference to this composite
      component.detach()
      component.referenceToParent = this
      this.components.push(component)
  }

  delete(component: ICompositeComponent): void {
      // Removes leaf/composite from this composite this.components
      const index = this.components.indexOf(component)
      if (index > -1) {
          this.components.splice(index, 1)
      }
  }

  detach(): void {
      // Detaching this composite from its parent composite
      if (this.referenceToParent) {
          this.referenceToParent.delete(this)
          this.referenceToParent = undefined
      }
  }
}

// The Client
const LEAF_A = new Leaf('leaf-a')
const LEAF_B = new Leaf('leaf-b')
const COMPOSITE_1 = new Composite('comp-1')
const COMPOSITE_2 = new Composite('comp-2')

// Attach LEAF_A to COMPOSITE_1
COMPOSITE_1.attach(LEAF_A)

// Instead, attach LEAF_A to COMPOSITE_2
COMPOSITE_2.attach(LEAF_A)

// Attach COMPOSITE1 to COMPOSITE_2
COMPOSITE_2.attach(COMPOSITE_1)

// Run the methods that
LEAF_B.method() // not in any composites
COMPOSITE_2.method() // COMPOSITE_2 contains both COMPOSITE_1 and LEAF_A

// example 2

// class MyNode {
//   children: MyNode[];
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
  
//   add(child: MyNode): void {
//     this.children.push(child);
//   }

//   remove(child: MyNode) {
//     var length = this.children.length;
//     for (var i = 0; i < length; i++) {
//       if (this.children[i] === child) {
//         this.children.splice(i, 1);
//         return;
//       }
//     }
//   }

//   getChild(i: number): MyNode {
//     return this.children[i];
//   }

//   hasChildren(): boolean {
//     return this.children.length > 0;
//   }
// }

// function traverse(indent: number, node: MyNode) {
//   console.log(Array(indent++).join("--") + node.name);

//   for (let i = 0, len = node.children.length; i < len; i++) {
//     traverse(indent, node.getChild(i));
//   }
// }

// class Application {
//   main(): void {
//     const tree = new MyNode("root");
//     const left = new MyNode("left");
//     const right = new MyNode("right");
//     const leftleft = new MyNode("leftleft");
//     const leftright = new MyNode("leftright");
//     const rightleft = new MyNode("rightleft");
//     const rightright = new MyNode("rightright");

//     tree.add(left);
//     tree.add(right);
//     tree.remove(right);
//     tree.add(right);

//     left.add(leftleft);
//     left.add(leftright);

//     right.add(rightleft);
//     right.add(rightright);

//     traverse(1, tree);
//   }
// }

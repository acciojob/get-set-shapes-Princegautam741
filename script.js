class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(newWidth) {
    this._width = newWidth;
  }

  get height() {
    return this._height;
  }

  set height(newHeight) {
    this._height = newHeight;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Since Square is a subclass of Rectangle with equal sides,
    // we can pass the same value for width and height in the superclass constructor.
    super(side, side);
  }

  // Override the set width and set height methods to ensure equal sides
  set width(newWidth) {
    this._width = newWidth;
    this._height = newWidth;
  }

  set height(newHeight) {
    this._height = newHeight;
    this._width = newHeight;
  }

  getPerimeter() {
    // Perimeter of a square is 4 times the length of one side
    return 4 * this.width;
  }
}

// Example usage
const rectangle = new Rectangle(5, 8);
console.log("Rectangle Area:", rectangle.getArea()); // Output: 40
console.log("Rectangle Width:", rectangle.width); // Output: 5
console.log("Rectangle Height:", rectangle.height); // Output: 8

const square = new Square(4);
console.log("Square Area:", square.getArea()); // Output: 16
console.log("Square Perimeter:", square.getPerimeter()); // Output: 16
console.log("Square Width:", square.width); // Output: 4
console.log("Square Height:", square.height); // Output: 4

// Modifying width and height using setters
rectangle.width = 10;
rectangle.height = 6;
console.log("Modified Rectangle Area:", rectangle.getArea()); // Output: 60

square.width = 6;
console.log("Modified Square Area:", square.getArea()); // Output: 36
console.log("Modified Square Perimeter:", square.getPerimeter()); // Output: 24

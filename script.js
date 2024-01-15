class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
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

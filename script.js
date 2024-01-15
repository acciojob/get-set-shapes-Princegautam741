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

// Attach classes to the window object
window.Rectangle = Rectangle;
window.Square = Square;

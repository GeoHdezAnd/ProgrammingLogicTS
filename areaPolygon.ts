interface Polygon {
    area(): number;
    printArea(): void;
}

class Triangle implements Polygon {
    constructor(public base: number, public height: number) {
        this.base = base;
        this.height = height;
    }

    area(): number {
        return (this.base * this.height) / 2;
    }

    printArea(): void {
        console.log(`Triangle area: ${this.area()}`);
    }
}

class Square implements Polygon {
    constructor(public side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }

    printArea(): void {
        console.log(`Square area: ${this.area()}`);
    }
}

class Rectangle implements Polygon {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    printArea(): void {
        console.log(`Rectangle area: ${this.area()}`);
    }
}

/**
 * Calculates the area of a polygon (Triangle, Square, or Rectangle)
 * @param polygon The polygon to calculate area for
 * @returns The area of the polygon
 */

function calculateArea(polygon: Polygon): number {
    return polygon.area();
}

// Testing
const triangle = new Triangle(10, 5);
const square = new Square(5);
const rectangle = new Rectangle(10, 5);

console.log(calculateArea(triangle));  // 25
console.log(calculateArea(square));    // 49
console.log(calculateArea(rectangle)); // 48

triangle.printArea();    // "Triangle area: 25"
square.printArea();      // "Square area: 49"
rectangle.printArea();   // "Rectangle area: 48"

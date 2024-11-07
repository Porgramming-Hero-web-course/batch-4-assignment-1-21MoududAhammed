// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

function calculateShapeArea(value: Circle | Rectangle): number {
  if (value.shape === "circle") {
    return Math.PI * value.radius * value.radius;
  } else if (value.shape === "rectangle") {
    return value.height * value.width;
  }
  return 0;
}
const myCircle: Circle = { shape: "circle", radius: 10 };
const myRectangle: Rectangle = { shape: "rectangle", height: 10, width: 20 };

const result1: number = calculateShapeArea(myCircle);
const result2: number = calculateShapeArea(myRectangle);

console.log(result1);
console.log(result2);

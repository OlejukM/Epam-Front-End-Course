var side1 = +prompt("Enter the length of the first side of a triangle.", "0");
var side2 = +prompt("Enter the length of the second of a triangle.", "0");
var side3 = +prompt("Enter the length of the third side of a triangle.", "0");
var p = (side1 + side2 + side3) / 2;
var s = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));

if (side1 > 0 && side2 > 0 && side3 > 0) {
  if (side1 * side1 == side2 * side2 + side3 * side3 || side2 * side2 == side3 * side3 + side1 * side1 || side3 * side3 == side1 * side1 + side2 * side2) {
    console.log("Type of triangle is right triangle and square is " + parseFloat(s.toFixed(2)));
  } else if (side1 == side2 && side2 == side3 && side3 == side1) {
    console.log("Type of triangle is equailateral and square is " + parseFloat(s.toFixed(2)));
  } else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("Type of triangle is isosceles and square is " + parseFloat(s.toFixed(2)));
  } else if (side1 !== side2 && side2 !== side3 && side3 !== side1) {
    console.log("Type of triangle is scalene and square is " + parseFloat(s.toFixed(2)));
  }
} else {
  console.log("Incorrect data");
}

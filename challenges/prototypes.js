// use this example as a reference VVV

// function Animal (name, energy) {
//   let animal = Object.create(Animal.prototype)
//   animal.name = name
//   animal.energy = energy

//   return animal
// }

// Animal.prototype.eat = function (amount) {
//   console.log(`${this.name} is eating.`)
//   this.energy += amount
// }

// Animal.prototype.sleep = function (length) {
//   console.log(`${this.name} is sleeping.`)
//   this.energy += length
// }

// Animal.prototype.play = function (length) {
//   console.log(`${this.name} is playing.`)
//   this.energy -= length
// }
// end of reference^^^^^^

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
//  reference VVV
// function Animal (name, energy) {
//   let animal = Object.create(Animal.prototype)
//   animal.name = name
//   animal.energy = energy
function CuboidMaker (length,width,height){
  let cuboid = Object.create(CuboidMaker.prototype);
  cuboid.length = length;
  cuboid.width = width;
  cuboid.height = height;

  return cuboid;
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
//  reference VVV
// Animal.prototype.eat = function (amount) {
  //   console.log(`${this.name} is eating.`)
  //   this.energy += amount
  // }
CuboidMaker.prototype.volume = function (length, width, height) {
  return length * width * height;
}


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMaker.prototype.surfaceArea = function (length, width, height) {
  return 2 * (length * width + length * height + width * height);
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
let rubix = new CuboidMaker( 4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(rubix.volume(4, 5, 5)); // 100
console.log(rubix.surfaceArea(4, 5, 5)); // 130



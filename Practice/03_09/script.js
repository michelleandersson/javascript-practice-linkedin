/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  giveNewName: function (newName) {
    this.name = newName; 
  }, 
  giveNewVolume: function (vol) {
    this.volume = vol; 
  }, 
  giveNewColor: function (newColor) {
    this.color = newColor; 
  }, 
};

console.log(backpack.name); 
backpack.giveNewName("Weekend Backpack");
console.log(backpack.name);  


console.log(backpack.volume); 
backpack.giveNewVolume(20); 
console.log(backpack.volume); 

console.log(backpack.color); 
backpack.giveNewColor("green"); 
console.log(backpack.color); 
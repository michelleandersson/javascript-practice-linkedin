/**
 * Create a Backpack object.
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
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("Digging deeper with dotnotation, we can get the straplength of L:", backpack.strapLength.left); 
console.log("Bracketnotation is clunkier but still gives us the value for pockets:", backpack["pocketNum"]);

var query = "pocketNum"; 
console.log("But bracketnotation allows us to use variables:", backpack[query]); 
console.log(backpack.pocketNum , "is the same as" , backpack[query]); 

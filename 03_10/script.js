/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

const weekendPack = new Backpack( 
  "Weekend Backpack", 
  15, 
  "green",
  20, 
  20,
  true
)

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("The weekendpack object:", weekendPack); 

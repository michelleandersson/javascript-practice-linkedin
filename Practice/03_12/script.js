/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Cellphone from "./Cellphone.js"; 
import Backpack from "./Backpack.js"

const myCellphone = new Cellphone (
    "Michelles Cell", 
    "blue", 
    24,
    "Samsung A41",
    true
); 

console.log(myCellphone); 

const workCellphone = new Cellphone (
    "Work Cell",
    "black", 
    20,
    "Morotola",
    false
); 

console.log(workCellphone); 
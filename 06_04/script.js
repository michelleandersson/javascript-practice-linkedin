/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

//let variables are local and this color only exists within this function
function headingColor() {
  let color = "blue";
  let titleColor = "green"
  document.querySelector(".title").style.color = titleColor;
  console.log("let variable inside function: ", titleColor); 
}
//outside function: error: uncaught reference error, not defined
// console.log("let variable outside function: ", titleColor); 
headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;

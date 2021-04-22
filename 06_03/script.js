/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

//adding a new definition of color here only affect the variables under, not over
color = "skyblue"; 

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;


//if this function was on line 13, right and right color value would be blue, not skyblue
//due to var is globally scoped, not locally
//NOTE: the color in function is only applied when the function is called,
//so we can still create the function for blue earlier and it will not mess
//with the code if we call the function after line 15
//to avoid problem all together, use let and const which are locally scoped
function headingColor() {
  color = "blue";
  document.querySelector(".title").style.color = color;
}

headingColor();

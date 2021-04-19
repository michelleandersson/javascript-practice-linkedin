/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

document.querySelector(".backpack__volume").style.backgroundColor ="red";
document.querySelector(".backpack__color").style.backgroundColor = "orange";
document.querySelector(".backpack__age").style.backgroundColor ="yellow";
document.querySelector(".backpack__pockets").style.backgroundColor ="green";
document.querySelector(".backpack__strap").style.backgroundColor ="blue";
document.querySelector(".feature:nth-of-type(6)").style.backgroundColor ="purple";
document.querySelector(".backpack__lid").style.backgroundColor ="pink"; 

document.querySelector("#pack02 .backpack__volume").style.color ="red";
document.querySelector("#pack02 .backpack__color").style.color ="orange";
document.querySelector("#pack02 .backpack__age").style.color ="yellow";
document.querySelector("#pack02 .backpack__pockets").style.color ="green";
document.querySelector("#pack02 .backpack__age").style.backgroundColor ="black";
document.querySelector("#pack02 .backpack__strap").style.color ="blue";
document.querySelector("#pack02 .feature:nth-of-type(6)").style.color ="purple";
document.querySelector("#pack02 .backpack__lid").style.color ="pink";

let bg = document.querySelectorAll("#pack02 .feature"); 
console.log(bg);
let i; 
for (i = 0; i < bg.length; i++) {
    bg[i].style.backgroundColor ="black";
}; 
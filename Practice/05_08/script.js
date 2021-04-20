/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */


// document.querySelector(".site-title").style.backgroundColor ="red"; 
// document.querySelector("img").setAttribute("alt", "a backpack");
// console.log(document.querySelector("h1").classList);
// document.querySelector("h1").toggleClass("backpackName"); 
// console.log(document.querySelector("h1").classList);

console.log(document.querySelector("img").hasAttribute("src"));
console.log(document.querySelector("img").hasAttribute("title"));
console.log(document.querySelector("img").getAttribute("src"));
console.log(document.querySelector("img").hasAttribute("alt"));
console.log(document.querySelector("img").getAttribute("alt"));
document.querySelector("img").setAttribute("alt", "a new backpack"); 
console.log(document.querySelector("img").getAttribute("alt"));
document.querySelector("img").setAttribute("title", "images don't need titles");
console.log(document.querySelector("img").getAttribute("title"));
document.querySelector("img").removeAttribute("title"); 
console.log(document.querySelector("img").getAttribute("title")); 
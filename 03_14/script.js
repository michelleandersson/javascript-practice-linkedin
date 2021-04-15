/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Books.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const Classic = new Book(
  "Lord of the Rings",
  "J.R. Tolkien",
  1970,
  30,
  true
);

console.log(Classic);
console.log("old page status:", Classic.pageStatus);
Classic.updatePageStatus(400);
console.log("new page status:", Classic.pageStatus);
console.log("I have read this book:", Classic.readStatus);
Classic.upadateReadStatus(false);
console.log("I have read this book:", Classic.readStatus);

const favoriteBook = new Book (
  "If Minds had Toes",
  "Lucy Eyer",
  2006,
  300,
  true
);

console.log(favoriteBook);


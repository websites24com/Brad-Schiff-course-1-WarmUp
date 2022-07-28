"use strict";

/*** Functions ***/
/*
function greet(name, favColor) {
  alert(
    "Hello my name is " + name + " and my favorite color is " + favColor + "."
  );
}

// greet("John", "blue");
// greet("Alex", "green");

function tripleMe(x) {
  return 3 * x;
}

let myFavoriteNumber = tripleMe;

console.log(myFavoriteNumber(5));
*/
/*** Objects ***/
/*
let cat = {
  // Properties

  name: "Fluffy",
  age: "4",
  eyeColor: "Blue",
  foods: {
    favorite: "Tuna",
    leastFavorite: "Oranges",
  },

  // Functions = methods in object

  meow() {
    alert("Meooowwwww");
  },

  click() {
    document.addEventListener("click", function () {
      alert("Hello there! I'm again!");
      cat.meow();
    });
  },
};

cat.click();
*/

/*** Arrays ***/

let myFavoriteNumbers = [9, 2, 4, 5, 6];
let myWords = ["red", "orange", "green"];

// ignore

let myPets = [
  { name: "Collin", species: "cat" },
  { name: "Barksalot", species: "dog" },
];

myWords.push("gold");
console.log(myWords);

myWords.splice(1, 1);
console.log(myWords);

myWords.splice(0, 1);
console.log(myWords);

console.log(myPets[1].species);

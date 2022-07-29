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
/*
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
*/

/*** Making decisions ***/
/*
let strawberryCount = 2;

if (strawberryCount > 9) {
  console.log("Congrats");
} else {
  console.log("Sorry, we do not ship orders that small");
}

while (strawberryCount <= 200) {
  console.log("There are: " + strawberryCount + " strawberries");
  strawberryCount++;
}
*/

/*** Higher-order functions */

// a) Accepts a function as an argument
// b) Returns a function

/*
function ourAmazingFunction() {
  alert("thank you for clicking");
}

document.addEventListener("click", ourAmazingFunction);

function doubleMe(x) {
  return x * 2;
}

console.log(doubleMe(20));

function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);
console.log(doubleMe(5), tripleMe(6), quadrupleMe(7));

function saySthNice(color) {
  console.log("The color " + color + " is my favorite");
}

let myColors = ["red", "orange", "yellow"];
myColors.forEach(saySthNice);

// ignore

let pets = [
  { name: "Meowsalot", species: "cat", age: 2 },
  { name: "Barksalot", species: "dog", age: 3 },
  { name: "Purrsloud", species: "cat", age: 8 },
];

pets.push({ name: "Puppster", species: "dog", age: 1 });

let onlyDogs = pets
  .filter((dog) => dog.species === "dog")
  .map((baby) => baby.age < 3);

console.log(onlyDogs);
*/

/*** Scope and context ***/
// Direction from inside to outside NOT from outside to inside!
// Scope is about variables, Context is about objects
/*

// Scope

let myName = "Brad";

function amazingFunction() {
  let myName = "Brad Junior";
  if (2 + 2 == 4) {
    let myName = "Brad the 3rd";
    console.log("inside the if statement", myName);
  }
  console.log("inside our function", myName);
}

amazingFunction();
console.log("in the global scope", myName);
*/

// Context

let john = {
  firstName: "John",
  lastName: "Doe",
  driveCar() {
    function imFunctionNotAMethod() {
      console.log(this);
    }
    imFunctionNotAMethod();
    console.log(this.firstName + " " + this.lastName + " is driving a car.");
  },
};

john.driveCar();

function breathe() {
  console.log(
    this.firstName + " " + this.lastName + " just inhaled and exhaled."
  );
}

breathe.call(john);

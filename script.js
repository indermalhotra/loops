const cars = ["Dzire", "Alto", "BMW"];

for (let car of cars) {
  console.log(car);
}

// for index number
for (let [indx, car1] of cars.entries()) {
  console.log(indx, car1);
}

let day = "thu";

const restaurant = {
  name: "Ekum Dhaba",
  location: "Ashok Vihar",
  categories: ["italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Brushetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    [day]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  //older way
  /* order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } */

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

console.log(restaurant.order?.(0, 1) ?? "Mathod not exist"); // we check if mehtod exist by optional chaing and then if not we print a message
console.log(restaurant.openingHours);

const userArray = [{ name: "Ekum", email: "good@good.com" }];

console.log(userArray[0]?.name ?? "Array is empty");

// Object.keys is used to take out all keys of object in array form
console.log(Object.keys(restaurant.openingHours));
console.log(Object.values(restaurant.openingHours));
console.log(Object.entries(restaurant.openingHours));

// use of for loop of

const schools = [
  { name: "MJKPS", location: "Ashok Vihar" },
  { name: "GNPS", location: "Nana Piao Gurdwara" },
];

for (let [indx, school] of Object.entries(schools)) {
  console.log(school, indx);
}

// to create new unique array

const newArr = [0, 1, 2, 3, 1, 4, 5, 6, 8, 1, 2, 3, 500];

const newArrUni = [...new Set(newArr)];
const stillSet = new Set(newArr);
console.log(newArrUni);

console.log(stillSet.has(8));
console.log(stillSet.size);

// sets new methods

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// to get common in two sets
const commonFood = italianFoods.intersection(mexicanFoods);
console.log([...commonFood]);

// to get unique in both set
const uniqeFood = italianFoods.union(mexicanFoods);
console.log(uniqeFood);

// to remove the element i.e common
const italianOnly = italianFoods.difference(mexicanFoods);
console.log(italianOnly);

// to get full unique set set1 did not have anything of set2
console.log(italianFoods.isDisjointFrom(mexicanFoods));

// MAPS
const questions = new Map();
questions.set(1, "question1").set(2, "question2");

console.log(questions);

console.log(questions.get(2));

// replace all
let string = "one Apple two apple";
console.log(string.toLowerCase().replace(/apple/g, "orange"));

// FUNCTION TO MAKE FIRST CH OF WORD CAPITAL
const capitalizeName = (name) => {
  const nameArr = name.split(" ");
  let capitalizeName = [];

  for (word of nameArr) {
    let restName = word.slice(1).toLowerCase();
    let firstLetter = word[0].toUpperCase();
    capitalizeName.push(firstLetter + restName);
  }
  return capitalizeName.join(" ");
};

console.log(capitalizeName("inderpreet singh"));
console.log(capitalizeName("ekUM prEEt sinGH"));

// FUNCTION TO MASK

const maskCard = (num, maskWith) => {
  num = num + '';
  let lastFour = num.split("").splice(-4).join("");
  return lastFour.padStart(num.length,maskWith)
};
console.log(maskCard("Ekumpreet", "-"));

/* 
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.


The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

const convertoCamelCase = wor =>{
 let wordArr = wor.split("_");
 let firstChar = wordArr[1].split("")[0].toUpperCase();
 let restChar = wordArr[1].split("").slice(1);
 console.log( wordArr[0]+firstChar+restChar.join(""))
}
convertoCamelCase("inder_preet");
convertoCamelCase("Ekum_preet");
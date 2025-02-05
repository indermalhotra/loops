const cars = ["Dzire","Alto","BMW"]

for(let car of cars){
    console.log(car);
}

// for index number
for(let [indx, car1] of cars.entries()){
    console.log(indx, car1)
}

let day = "thu";

const restaurant = {
    name:'Ekum Dhaba',
    location:'Ashok Vihar',
    categories:['italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu:['Focaccia', 'Brushetta', 'Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],
    openingHours:{
        [day]:{
            open:12,
            close:22
        },
        fri:{
            open:11,
            close:23
        },
        sat:{
            open:0,
            close:24
        }
    },

    //older way
    /* order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    } */

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }        
}

console.log(restaurant.order?.(0,1) ?? "Mathod not exist");  // we check if mehtod exist by optional chaing and then if not we print a message
console.log(restaurant.openingHours)

const userArray = [
    {name:"Ekum",email:"good@good.com"}
]

console.log(userArray[0]?.name ?? "Array is empty");

// Object.keys is used to take out all keys of object in array form
console.log(Object.keys(restaurant.openingHours));
console.log(Object.values(restaurant.openingHours));
console.log(Object.entries(restaurant.openingHours));

// use of for loop of

const schools = [
    {name:"MJKPS",location:"Ashok Vihar"},
    {name:"GNPS", location:"Nana Piao Gurdwara"}
]

for(let [indx, school] of Object.entries(schools)){
    console.log(school, indx);
}

// to create new unique array

const newArr = [0,1,2,3,1,4,5,6,8,1,2,3,500]

const newArrUni = [...new Set(newArr)];
const stillSet = new Set(newArr);
console.log(newArrUni);

console.log(stillSet.has(8));
console.log(stillSet.size);

// sets new methods

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);
  
  const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
  ]);


  // to get common in two sets
  const commonFood = italianFoods.intersection(mexicanFoods);
  console.log([...commonFood])

  // to get unique in both set
  const uniqeFood = italianFoods.union(mexicanFoods);
  console.log(uniqeFood);

  // to remove the element i.e common
  const italianOnly = italianFoods.difference(mexicanFoods);
  console.log(italianOnly)




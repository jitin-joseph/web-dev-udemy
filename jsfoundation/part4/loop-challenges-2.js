let teaArr = ["green tea","black tea","chai","oolong tea"];
let selectedTea = [];
for (let index = 0; index < teaArr.length; index++) {
    if(teaArr[index]=="chai"){
        break;
    }
    selectedTea.push(teaArr[index]);
}
console.log(selectedTea);//[ 'green tea', 'black tea' ]
//---------------------------------

let cities = ["London", "New York","Paris","Berlin"];
let visitedCities = [];
for (let index = 0; index < cities.length; index++) {
    if(cities[index]=="Paris"){
        continue;
    }
    visitedCities.push(cities[index]);
}
console.log(visitedCities);//[ 'London', 'New York', 'Berlin' ]
//----------------------------------

let numbers = [1,2,3,4,5];
let smallNumbers = [];
for (const num of numbers) {
    if(num==4){
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);//[ 1, 2, 3 ]
//-----------------------------------

let citiesPopulation={
    "London" :8900000,
    "New York":8400000,
    "Paris":2200000,
    "Berlin" :3500000
};

let cityNewPopulation = {};

console.log(Object.keys(citiesPopulation));//[ 'London', 'New York', 'Paris', 'Berlin' ]
console.log(Object.values(citiesPopulation));//[ 8900000, 8400000, 2200000, 3500000 ]

for (const city in citiesPopulation) {
   console.log(city);
   console.log(citiesPopulation[city]);
   //key = value
   if(city=="Berlin"){
    break;
   }
   cityNewPopulation[city] = citiesPopulation[city];
}
//London
// 8900000
// New York
// 8400000
// Paris
// 2200000
// Berlin
// 3500000
console.log(cityNewPopulation);//{ London: 8900000, 'New York': 8400000, Paris: 2200000 }
//-------------------------------------

let teaCollection = ["green tea","black tea","chai","oolong tea"];
let availableTea = [];
teaCollection.forEach((tea) => {
   console.log(tea);
   if(tea=="chai"){
    return; //used to exit the function
   } 
   availableTea.push(tea);
});
console.log(availableTea);//[ 'green tea', 'black tea', 'oolong tea' ]
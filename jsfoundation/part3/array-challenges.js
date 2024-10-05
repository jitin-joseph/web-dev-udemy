let teaFlavours = ["green tea","black tea","oolong tea"];
//Also another format
let teaFlavoursArr = new Array("green tea","black tea","oolong tea");

const firstTea = teaFlavours[0];
console.log(firstTea);//green tea


let cities = new Array("London", "Tokyo", "Paris", "New York");
const favCity = cities[2];//3rd eleemnt
console.log(favCity);//Paris

let teaTypes = new Array("herbal tea","white tea","masala chai");


let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);//[ 'Mumbai', 'Sydney', 'Berlin' ]


let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(lastOrder);//earl grey

let popularTeas = ["green tea", "oolong tea", "chai"];
let sofCopyTeas = popularTeas;
popularTeas.pop();
console.log(sofCopyTeas);//[ 'green tea', 'oolong tea']


let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyTeas = [...topCities];
topCities.pop();
console.log(hardCopyTeas);//[ 'Berlin', 'Singapore', 'New York' ]


let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities1 = europeanCities + asianCities;
console.log(worldCities1);//Paris,RomeTokyo,Bangkok
console.log(typeof worldCities1);//string
let worldCities2 = [europeanCities,asianCities];
console.log(worldCities2);//[ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]
console.log(typeof worldCities2);//object
let worldCities3 = europeanCities.concat(asianCities);
console.log(worldCities3);//[ 'Paris', 'Rome', 'Tokyo', 'Bangkok' ]
console.log(typeof worldCities3);//object


let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);//4

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList1 = cityBucketList.includes("london");
console.log(isLondonInList1);//false because case not matching
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);//true

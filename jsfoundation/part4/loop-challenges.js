//while loop

let sum=0;
let i=1;

while(i <=5){
    sum = sum+i;
    i++;
}
console.log(sum);//15

//----------------------------------

let countdown = [];
let j=5;
while(j > 0){
    countdown.push(j);
    j--;
}
console.log(countdown);//[ 5, 4, 3, 2, 1 ]

//----------------------------------

let teaCollection = [];
let tea;
/* test in browser
do {
    prompt(`Enter you favourite tea type. Type stop to finish`);
    if(tea != "stop"){
        teaCollection.push(tea);
    }
} while (tea != "stop");*/

//----------------------------------

let total = 0;
let k=1;
do {
    total +=k;
    k++;
} while (k<=3);
console.log(total);//6

//------------------------------------
let multipliedNumbers = [];
let numbers = [2,4,6];
for(l=0;l<numbers.length;l++){
   takeNumber= numbers[l]*2;
   multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);//[ 4, 8, 12 ]

//---------------------------------------

let cities = ["Paris","New York","Tokyo","London"];
let cityList=[];
for (let index = 0; index < cities.length; index++) {
    cityList.push(cities[index]);
    
}
console.log(cityList);//[ 'Paris', 'New York', 'Tokyo', 'London' ]
let username = {};
console.log(username); //{}
console.log(typeof username); //object

let username1 = {
  firstname: "jitin",
  "last name": "joseph",
  isLoggedIn: true,
};
console.log(username1); //{ firstname: 'jitin', isLoggedIn: true }
console.log(typeof username1); //object
console.log(username1.firstname); //jitin
console.log(username1["last name"]); //joseph

//Date
let today = new Date(); // October 3, 2024, Thurdsay
console.log(today.getDate());//3
console.log(today.getDay());//4 for Thursday
console.log(today.getMonth());//9 we get minus 1 value for month
console.log(today.getFullYear());//2024

//Array
let heros = ["ironman","thor","captain america","black widow","hawkeye"];
console.log(heros);//[ 'ironman', 'thor', 'captain america', 'black widow', 'hawkeye' ]

let anotherUser = ["jitin",true];
console.log(anotherUser['0']);//jitin
console.log(anotherUser['1']);//true

//Implict Type conversion
console.log("1"+1);//11

let isValue=1;
console.log(isValue+1);//2 because JS considers true as 1, false as 0
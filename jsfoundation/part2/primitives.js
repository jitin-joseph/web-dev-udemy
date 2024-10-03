//Number
let balance = 120;
console.log(balance);//120
console.log(typeof balance);//number

//Boolean
let isActive = true;
console.log(typeof isActive);//boolean

//null & undefined
let firstname;
console.log(typeof firstname);//undefined

let lastname=null;
console.log(lastname);//null

//String
let myString = "Hello";
let myStringOne = 'Hola';
let username = 'jitin';
let oldGreet = myString+username;
console.log(oldGreet);//Hellojitin
oldGreet = myString+" "+username;
console.log(oldGreet);//Hello jitin
let greetMessage = `Hello ${username} !`; //string interpolcation
console.log(greetMessage);


//Symbol
let sm1 = Symbol();
console.log(sm1);//Symbol()
let sm2 = Symbol();
console.log(sm2);//Symbol()

console.log(sm1 == sm2);//false because the point of symbol is that it generates a unique value

let sm3 = Symbol("jitin");
console.log(sm3); //Symbol(jitin)
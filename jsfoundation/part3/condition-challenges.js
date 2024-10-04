//check if numbers is less than
let num1 = 5; 
let num2 = 8;

console.log("I am a regualr upper code");

if(num1 < num2){
    console.log(`${num1} is less than ${num2}`);
}else{
    console.log(`${num1} is not less than ${num2}`);
}

console.log("I am a regualr lower code");

//check if strings are equal
let username="jitin";
let anotherUsername="jitin";

if(username == anotherUsername){
    console.log(`${username} is equal to ${anotherUsername}`)
}

//check if a variable is a number or not
let score = 44;
if(typeof score === 'number'){
    console.log("score is a number");
}else{
    console.log("score is not a number");
}


//check if a boolean value is true or false
let isTeaReady = false;
if(isTeaReady){
    console.log("Tea is ready!");
}else{
    console.log("Tea is not ready!");
}

//check if array is empty or not
let items=[];
console.log("items.length "+items.length);
if(items.length ===0){
    console.log("array is empty");

}else{
    console.log("array is not empty");
}
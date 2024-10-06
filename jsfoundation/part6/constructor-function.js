//normal function
function greet(name ){
    console.log("Hello ",name);
}
//---------------------

//constructor function
//First letter capital, can be small also
function Person(name,age){ 
    this.name = name;
    this.age = age;
}

function Car(make,model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota","Camry");
console.log(myCar);//Car { make: 'Toyota', model: 'Camry' }

let myNewCar = new Car("Maruti","Baleno");
console.log(myNewCar);//Car { make: 'Maruti', model: 'Baleno' }

function Tea(type){
    this.type = type;
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    }
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea);//Tea { type: 'lemon tea', describe: [Function (anonymous)] }
console.log(lemonTea.describe());//this is a cup of lemon tea

function Animal(species){
    this.species =species;
}

Animal.prototype.sound = function(){
    return `${this.species} makes a sound`;
}

let dog = new Animal("Dog");
console.log(dog.sound());//Dog makes a sound

let cat = new Animal("Cat");
console.log(cat.sound());//Cat makes a sound

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
        
    }
    this.name = name;
}

let tea = new Drink("tea");
console.log(tea);//Drink { name: 'tea' }
let coffee = Drink("coffee");
console.log(coffee);//Error: Drink must be called with new keyword


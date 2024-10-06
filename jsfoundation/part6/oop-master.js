let car = {
    make:"Toyota",
    model:"Camry",
    year:"2020",
    start:function(){
        return `${this.make} ${this.model} got started in year ${this.year}`;
    }
};

console.log(car.start());//Toyota Camry got started in year 2020


class Vehicle{

    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    start(){//declare function without calling  function prefix
        return `${this.model} is from ${this.make}`;
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make} : This is inheritance example`;
    }
}

let myCar = new Car("Toyota","Velfire");
console.log(myCar.start());//Velfire is from Toyota
console.log(myCar.drive());//Toyota : This is inheritance example

let vehOne = new Vehicle("Toyota","Glanza");
console.log(vehOne.make);//Toyota
console.log(vehOne.model);//Glanza




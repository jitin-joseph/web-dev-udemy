function teaOrder(teaType){
    function confirmOrder(){
        return `Order confirmed for tea`;
    }
    return confirmOrder();
}

let orderConfirmation = teaOrder("classic indian tea");
console.log(orderConfirmation);

//---------------------------------
//Arrow function

//function greet() {} //normal function
//const greet = () => {} //arrow function

const calculateTotal = (price,quantity) => {
    return  price * quantity;
}
let totalConst = calculateTotal(23,5);
console.log(totalConst);
//-----------------------------------
//Higher order function / First Class function
function makeTea(typeOfTea){
    return `maketea ${typeOfTea} `;
}
function processTeaOrder(teaFunction){
    return teaFunction(("earl grey"));
}

let order = processTeaOrder(makeTea);
console.log(order);//maketea earl grey
//-----------------------------------

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);//Making green tea
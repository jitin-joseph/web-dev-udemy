let computer = {cpu:12};

let tomHardware={};

console.log(computer);//{ cpu: 12 }
//Dunder prototype
//test in browser cosnole to see the details
console.log(`computer `,computer.__proto__);//computer  [Object: null prototype] {}

let lenovo = {
    screen:"HD",
    __proto__:computer

};
console.log(`lenovo `,lenovo.__proto__);//lenovo  { cpu: 12 }

//------------------------------------------

let genericCars = {tyres:4};
let tesla={driver:"AI"};
Object.setPrototypeOf(tesla,genericCars);
console.log(`tesla `,tesla);//tesla  { driver: 'AI' }
console.log(`tesla `,Object.getPrototypeOf(tesla));//tesla  { tyres: 4 
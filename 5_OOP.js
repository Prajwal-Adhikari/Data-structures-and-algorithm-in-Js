// //OBJECTS
// const circle = {
//     radius:1,   //property
//     location:{
//         x:1,
//         y:1,
//     },  
//     draw:()=>console.log("circle")  //method
// }

// circle.draw();
// console.log(circle.radius);

// //Factory function
// function createCircle(radius) {
//     return{
//         radius,
//         draw:()=>console.log(`"circle of radius "`)
//     }
// }

// const newCircle = createCircle(10);

// //constructors
// function Circle(radius){
//     this.radius = radius;
//     this.draw = () => {console.log(`draw circle of ${radius} radius`);
// }
    
// }

// const another = new Circle(5);
// another.draw();

// const testCircle = Circle.call({},1);

// //constructor property
//  console.log(Number())
//  console.log(String())
//  console.log(Boolean())
//  console.log(another.constructor);
//  console.log(newCircle.constructor);

//values and references
//value type
let x = 10;
console.log(`x is ${x}`);
let y = x;
x = 20;
console.log(`x is ${x}`);
console.log(`y is ${y}`);
// x and y are completely independent 
// when we do y = x, the value stored in the x is COPIED into the y and when we do x = 20, x gets changed to 20 but y is uneffected.
//reference type
let a = {value:10}; 
let b = a;
console.log(`a is ${a.value}`);
console.log(`b is ${b.value}`);
// a and b points to same memory location so when we change a variable, change is reflected into the other.

//example
let num = 10;
function increase(num){
    return num++;
}
console.log(increase(num));
//num is not increased as its a primittive and inside increase function we are incrementing a completely different variable.

//now lets take a reference type
let number = {value:10};
function increment(number){
    return number.value++;
}
increment(number);
console.log(number);
//as we are now dealing with a reference type variable we see increment in value of number object when we run it through the increment function.

//Adding and removing properties

const car = {
    brand:"toyota",
    model:"S",
    price:1000,
    deleteme:"you can delete me"
}

console.log(car);
//lets add some property to our object
car.builtIn = 1990;
console.log(car.builtIn);

//lets delete the deleteme property
delete car['deleteme'];
console.log(car);

//more examples
car['added-new'] = "this is addition having - .";
console.log(car);

//Enumerating properties

const myCar = {
    brand:"toyota",
    model:"S",
    price:1000,
    deleteme:"you can delete me"
}

for(let key in myCar){
    console.log(key);
}
for(let key in myCar){
    console.log(key,myCar[key]);
}

const keys = Object.keys(myCar);
console.log(keys);
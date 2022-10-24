const obj = {
    name:"Prajwal",
    age:18,
    role:"Senior blockchain dev",
    greet:function sayHello(){
        return `Hello ${this.name}`
    },
    "key with-and space":true,
    "deleteMe":"useless"
};

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
obj.hobby = "coding";
console.log(obj);
console.log(obj["key with-and space"]); //logs true
delete obj.deleteMe;
console.log(obj)

// //Object.keys(),values(),entries()

// //keys()
// // The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
const myObj = {
    a:"something",
    b:1,
    c:()=>{console.log("Hello World");}
}
const myObjKeys = Object.keys(myObj);
console.log(myObjKeys);

const myArr = ["apple","ball","cat","dog","elephant"];
console.log(Object.keys(myArr));

const anObj = { 100: 'a', 2: 'b', 7: 'c',1: 'd' };
console.log(Object.keys(anObj)); // console: ['1' ,'2', '7', '100']


const fruits = "Banana";
const keys = Object.keys(fruits);
console.log(keys);

// // The Object.keys() method returns an Array Iterator object with the keys of an object.
// // 
// // The Object.keys() method does not change the original object.


//values()
// Object.values() returns an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by looping over the property values of the object manually.
const testObj = {
    name:"Prajwal",
    age:20,
    role:"Senior blockchain dev"
}

console.log(Object.values(testObj));

const arrayLikeObj2 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

console.log(Object.values('foo')); // ['f', 'o', 'o']


//entries
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop.

const Obj1 = {
    name:"Prajwal",
    age:20,
    role:"Sr. blockchain dev"
}
for([key,value] of Object.entries(Obj1)){
    console.log(`${key} : ${value}`);
}

console.log(Object.entries(Obj1));

console.log(Object.entries('foo'));

// /*
// Object - Big O Time Complexity
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)
// */
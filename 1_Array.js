/*
To create an array we use [] brackets.
Members of an array are called elements.
Each element in the array has its index.
Array index starts from 0.
Array can have elements of different datatypes.
*/  

const arr = [1,2,3,"prajwal"];

// //To get an element from the array we can use index.
const elementAtOne = arr[1];
console.log(elementAtOne);  // logs 2 in the console as at index 1 there is 2.

// //To print the whole array we can use for of loop.
for(const element of arr){
    console.log(element);
}

// //To append an element in the array we can use push() method.
arr.push(4);    //appends 4 to the last of the array.
console.log(arr);

// //To insert element at the index 0 of the array we use unshift() method.
arr.unshift(0);     //appends 0 to the very first of the array.
console.log(arr);

// //To remove an element from the last of the array we use pop() method.
const popedElement = arr.pop()  //removes 4 from the array so popedElement == 4.

console.log(popedElement)
console.log(arr);

// //To remove an element from the very first of the array we use shift() method.
arr.shift();    //removes 0 from the array.
console.log(arr);

// /*
// Some important array methods
// 1. map()
// 2. filter()
// 3. reduce()
// 4. concat()
// 5. slice()
// 6. splice()
// */


// //map()

// //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr1 = [1,2,3];
// //return square of each element in the arr1.

const squaredArr = arr1.map(x => x**2);
console.log(squaredArr);

// //Result of map() - A new array with each element being the result of the callback function.

const slangs =[
    {firstWord : "hell", secondWord: "Nah"},
    {firstWord : "fuck", secondWord: "yeah"},
    {firstWord : "no", secondWord: "cap"},
];

function getSlang(slang){
    return [slang.firstWord,slang.secondWord].join(" ");
}

const results = slangs.map(getSlang);       //map() accepts callbacks.

console.log(results);

console.log(Array.prototype.map.call(slangs,getSlang));
const arr2 = ["aaa","bbb","ccc"];
const collection = arr2.map((ele)=>{
    return ele[0];
});



console.log(collection.join(""));


// //map in a sparse array - array with empty spaces
const sparseArr = [1,,3];
console.log(sparseArr.map((x,index)=>{
    console.log(`visit ${index}`);
    return x*2;
}))


// //calculate the weight of an array that contains numbers in the form of string. weight of an array here == sum of the elements in the array

let sum = 0;
const strArr = ['1','2','4'];
const total = (_arr) => {
     for(item of _arr){
        sum = sum + item;
     }
     return sum;
}

const numArr = strArr.map(str => parseInt(str));
console.log(total(numArr));


/*
filter()

- filter() method creates a shallow copy (reference to the original array, change in this one is reflected in the original one ), filtered down to just the elements from the given array that pass the implemented by the provided function.   ???

*/

const myArr = [1,2,4,5,6,8,9,10,12,15,17,20,25];
console.log(myArr.filter(num => num % 2 == 0));



//reduce()

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.





const ogArr = [1,2,3,4,5];
const initialSum = 0;
const sumWithInitial = ogArr.reduce(
    (previousValue,currentValue) => previousValue + currentValue,initialSum
);
console.log(sumWithInitial);

const numbers = [15.5, 2.3, 1.1, 4.7]; 
console.log(numbers.reduce(getSum, 0));     //15.5->16 2.3->2 4.7->5

function getSum(total, num) {
  return total + Math.round(num);
}

// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

//concat()


const text1 = "Hello";
const text2 = "World"

console.log(text1.concat(text2));   //HelloWorld
console.log(text1.concat(" ",text2));   //Hello World


console.log(text1.concat(" ",text2," ","say ",text1));



// //slice()
const unsliced = ["apple","banana","cherry","dragonfruit"];
console.log(unsliced.slice(0,2));   //['apple','banana']    end index non inclusive


// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

console.log(unsliced.slice(2));     //[ 'cherry', 'dragonfruit' ]
console.log(unsliced.slice(-2))     //[ 'cherry', 'dragonfruit' ]
console.log(unsliced.slice());      //["apple","banana","cherry","dragonfruit"] 


//splice()

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

const frveguits = ["Banana", "Orange", "Apple", "Mango"];
frveguits.splice(2, 1, "Lemon", "Kiwi");
console.log(frveguits)

// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.



/*
Array- Big O Time Complexity
Insert/Remove from end - O(1)   constant time
Insert/Remove from end - O(n)
Access - O(1)
Search - O(n)
Push/pop - O(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

*/
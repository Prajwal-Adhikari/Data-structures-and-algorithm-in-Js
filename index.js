/*
To create an array we use [] brackets.
Members of an array are called elements.
Each element in the array has its index.
Array index starts from 0.
Array can have elements of different datatypes.
*/  

const arr = [1,2,3,"prajwal"];

//To get an element from the array we can use index.
const elementAtOne = arr[1];
console.log(elementAtOne);  // logs 2 in the console as at index 1 there is 2.

//To print the whole array we can use for of loop.
for(const element of arr){
    console.log(element);
}

//To append an element in the array we can use push() method.
arr.push(4);    //appends 4 to the last of the array.
console.log(arr);

//To insert element at the index 0 of the array we use unshift() method.
arr.unshift(0);     //appends 0 to the very first of the array.
console.log(arr);

//To remove an element from the last of the array we use pop() method.
const popedElement = arr.pop()  //removes 4 from the array so popedElement == 4.

console.log(popedElement)
console.log(arr);

//To remove an element from the very first of the array we use shift() method.
arr.shift();    //removes 0 from the array.
console.log(arr);

/*
Some important array methods
1. map()
2. filter()
3. reduce()
4. concat()
5. slice()
6. splice()
*/

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
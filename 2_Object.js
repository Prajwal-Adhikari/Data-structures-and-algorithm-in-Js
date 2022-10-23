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

//Object.keys(),values(),entries()


/*
Object - Big O Time Complexity
Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)
*/
const map = new Map([['a',1],['b',2]]);
function print(map){
    for(const [key,value] of map){
        console.log(`${key}:${value}`);
        
    }
}
print(map);
map.set('c',3);
print(map)
map.delete('c');
print(map);
console.log(map.has('a'));  //true
console.log(map.has(2));    //false

console.log(map.size)

map.clear();
console.log(map);
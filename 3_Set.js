const set = new Set([1,2,3]);
for(const item of set){
    console.log(item)
}
console.log(set.has(4));
set.add(4);
console.log(set.has(4));

console.log(set.size);
set.delete(4)

set.clear();
console.log(set);

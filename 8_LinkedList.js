class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;  //size of the linkedlist
    }

    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    print(){
        if(list.isEmpty()){
            console.log("List is empty");
        }else{
            let curr = this.head;
            let listValues = '';
            while(curr){
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList();
console.log(`List is initially empty : ${list.isEmpty()}`);
console.log(`Initially the size of the linkedlist is : ${list.getSize()}`);
console.log("Printing the list");
list.print();
console.log("Prepend operation");
list.prepend(5);
list.prepend(50);
list.prepend(57);
list.prepend(54);
list.prepend(5);
list.print();

console.log(list.getSize());
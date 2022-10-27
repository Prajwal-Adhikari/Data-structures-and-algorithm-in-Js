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
}

const list = new LinkedList();
console.log(`List is initially empty : ${list.isEmpty()}`);
console.log(`Initially the size of the linkedlist is : ${list.getSize()}`);
console.log("Prepend operation");
list.prepend(5);
console.log(list);
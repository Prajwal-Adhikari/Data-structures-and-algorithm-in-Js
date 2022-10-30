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
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
          return;
        }
        if (index === 0) {
          this.prepend(value);
        } else {
          const node = new Node(value);
          let prev = this.head;
          for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
          }
          node.next = prev.next;
          prev.next = node;
          this.size++;
        }
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
list.print();
list.prepend(0);
list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);

console.log(list.getSize());
list.print();
list.append("a");
list.append("a");
list.append("a");
console.log(list.getSize());
list.print();

list.insert(20,5);
list.print();

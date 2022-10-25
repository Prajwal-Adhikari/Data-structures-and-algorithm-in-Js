class Stack{
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
    print(){
        console.log(this.items.toString());
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1)
stack.push(0)
stack.push(2)
stack.push(4)
console.log(stack.size());
stack.print();
stack.pop();
stack.peek();
stack.print();
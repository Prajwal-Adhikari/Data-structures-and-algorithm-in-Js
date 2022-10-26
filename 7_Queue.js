class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    Enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }
    Dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    isEmpty(){
        return this.rear - this.front === 0;
    }
    peek(){
        return this.items[this.front];
    }
    size(){
        return this.rear - this.front;
    }
    print(){
        console.log(this.items);
    }
}

const q = new Queue();
console.log(q.isEmpty());
console.log(q.print());
console.log(q.size());
q.Enqueue(1);
q.Enqueue(2);
q.Enqueue(3);
q.Enqueue(4);
console.log("After enqueue:");
console.log(q.isEmpty());
console.log(q.print());
console.log(q.size());
console.log(q.Dequeue());
console.log("After dequeue:");
console.log(q.print());
console.log(q.size());
console.log(q.peek());
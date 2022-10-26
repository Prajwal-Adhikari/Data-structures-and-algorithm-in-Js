//CIRCULAR QUEUE
 /*
 - The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element.

 - Also referred to a circular buffer or a ring buffer and follows FIFO principle.

 - A circular queue will reuse the empty block created during the dequeue operation.

- When working with queue of MAXIMUM_SIZE, a circular queue is a great implementation choice.


*/

class CircularQueue{
    constructor(MAX_SIZE){
        this.items = new Array(MAX_SIZE);
        this.currentLength = 0;
        this.capacity = MAX_SIZE;
        this.rear = -1;
        this.front = -1;
    }
    isFull(){
        return this.currentLength === this.capacity;
    }
    isEmpty(){
        return this.currentLength === 0;
    }
    Enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }else{
            console.log("Stack is full");
        }
    }
    Dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if(this.isEmpty()){
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            let i;
            let str = "";
            for(i = this.front; i !== (this.rear); i = (i + 1) % this.capacity){
                str += this.items[i] + " ";
            }
            str += this.items[i];
            console.log(str);
        }
    }
}

const q = new CircularQueue(5);
console.log(`Initially our queue is empty : ${q.isEmpty()}`);
q.print();
q.Enqueue(0);
q.Enqueue(1);
q.Enqueue(2);
q.Enqueue(3);
q.Enqueue(4);
console.log("After enqueue");
console.log(`our queue is now full : ${q.isFull()}`);
q.print();
q.Enqueue(5);
console.log(`Dequeue function called. Dequeued item is ${q.Dequeue()}`);
q.print();
console.log(`element at front is : ${q.peek()}`);
q.Enqueue(5);
q.print();

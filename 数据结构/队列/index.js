 export class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length ? false : true;
    }
    size() {
        return this.items.length
    }
    toString() {
        return this.items.join(' ')
    }
}


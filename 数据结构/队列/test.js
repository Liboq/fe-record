// enqueue() 测试
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue.items); //--> ["a", "b", "c", "d"]

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.front()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d

// 击鼓传花
const passGame = (nameList, number) => {
    const queue = new Queue();
    nameList.forEach(value => {
        queue.enqueue(value)
    })
    while (queue.size() > 1) {
        for (let i = 0; i < number - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    return queue.front()
}
const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", targetIndex); //--> lily
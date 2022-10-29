const q = require('./queues-arrays')

for(let i = 0; i<5;i++){
    q.enqueue(i+1)
}
q.print();
q.front()
console.log(q.dequeue())
console.log(q.size())
console.log(q.dequeue())
q.print();
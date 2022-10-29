// queues implementation using arrays;
let items = [];
function Queue(){
   this.enqueue = function (value){
        items.push(value)
   }

   this.dequeue = function(){
        if(this.isEmpty()){
            return -1
        }
        return items.shift()
   }
   // to check if the queue is empty
   this.isEmpty = function (){
    return items.length === 0;
   }

   // to check get the size of the queue
   this.size = function size(){
    return items.length;
   }

   this.front = function(){
    if(this.isEmpty()){
        return -1
    }
    return items[0];
   }

   this.print = function (){
    console.log(items.toString())
   }

}

const q = new Queue()
module.exports = q;

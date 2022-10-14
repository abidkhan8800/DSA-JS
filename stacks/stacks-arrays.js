// stack implementation using arrays

// let items = [];

// function Stack(){
// 	this.push = function (value) {
//   	items.push(value)
//     return true
//   }
//   this.pop = function () {
//   	if(this.size() === 0){
//     	return false
//     }
//   	return items.pop()
//   }
//   this.peek = function(){
//   	return items[items.length - 1]
//   }
  
//   this.print = function(){
//   	console.log(items.toString())
//   }
//   this.size = function(){
//   	return items.length
//   }
//   this.clear = function(){
//   	items = [];
//   }
//   this.isEmpty = function (){
//     return items.length == 0;
//   }
// }
class Stack{
    constructor(){this.items = []}
	push(value) {
        this.items.push(value)
        return true
    }
    pop() {
        if(this.size() === 0){
            return false
        }
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    
    print(){
  	    console.log(this.items.toString())
    }
    size(){
  	    return this.items.length
    }
    clear(){
  	    this.items = [];
    }
    isEmpty(){
        return this.items.length == 0;
    }
}

const stack = new Stack();
module.exports = stack;
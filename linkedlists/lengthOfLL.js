const ll = require('./linkedLists');

for(let i = 0; i < Math.ceil((Math.random() * 100)); i++){
    ll.append(i+1);
}

console.log(ll.print())

// findiing length of linked list iteratively
function lengthOfLLi(ll){
    let current = ll.getHead();
    let count = 0;
    while(current){
        count++;
        current = current.next;
    }

    return count;
}


console.log(lengthOfLLi(ll));

function lengthOfLLr(head){
    if(!head){
        return 0
    }
    return 1 + lengthOfLLr(head.next)
}


console.log(lengthOfLLr(ll.getHead()))
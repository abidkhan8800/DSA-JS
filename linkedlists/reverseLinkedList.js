const ll = require('./linkedLists');
for(let i = 0; i< 10; i++){
    ll.append(i+1)
}
ll.print()

function reverseLL(head){
    let current = head;
    let prev = null;
    let fwd= null;
    
    while(current){
        fwd = current.next;
        current.next = prev;
        prev = current;
        current = fwd
    }

    head = prev;
    return head;
}

let head = reverseLL(ll.getHead())
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
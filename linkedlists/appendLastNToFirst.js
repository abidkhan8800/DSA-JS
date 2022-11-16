const ll = require('./linkedLists');

for(let i = 0; i< 10; i++){
    ll.append(i+1)
}
ll.print()


function appendLastNToFirst(ll, n){
    const len = ll.size();
    const head = ll.getHead()
    let current = head
    let prev = null;

    if(n <=0 || n > len - 1 ){
        return head;
    }

    for(let i = 0; i < len - n; i++){
        prev = current;
        current = current.next;
    }
    let tempHead = current;
    prev.next = null;
    
    while(current.next){
        current = current.next;
    }
    current.next = head;
    return tempHead
}

let head = appendLastNToFirst(ll, 5)
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
const ll = require('./linkedLists');
for(let i = 0; i < 5; i++){
    ll.append(i+1)
}
ll.print()


function midPoint(head){
    let slow = head;
    let fast = head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function midPoint2(head, len){
    let current = head;
    mid = Math.floor((len -1) /2)
    while(mid--){
        current = current.next
    }

    return current;
}

const head = midPoint(ll.getHead())
const head2 = midPoint2(ll.getHead(), ll.size())

console.log(head2.element)
console.log(head2.element)
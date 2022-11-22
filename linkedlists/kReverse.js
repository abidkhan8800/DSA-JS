const ll = require('./linkedLists');
for(let i = 0; i < 10; i++){
        ll.append(i)
}
ll.print()

function reverse(head){
    let prev = null;
    let current = head;
    let fwd = null;

    while(current){
        fwd = current.next;
        current.next = prev;
        prev = current;
        current = fwd
    }

    return {
        head: prev,
        tail: head
    }
}

function length(h){
    let count = 0;
    while(h){
        h = h.next;
        count++;
    }
    return count
}

function kReverse(head, k){
    if(!head || !head.next){
        return head;
    }

    if(k == 0){
        return reverse(head)['head']
    }

    let counter = 1;
    let h1 = head;
    let h2 = null;
    let t1 = head;

    while(counter < k && t1) {
        t1 = t1.next;
        counter++
    }
    if(t1){
        h2 = t1.next;
        t1.next = null
    }

    if(length(h1) < k){
        return reverse(h1)['head']
    }else{
        const {head, tail} = reverse(h1);
        let smallRev = kReverse(h2,k)
        tail.next = smallRev
        return head
    }
}


let head = kReverse(ll.getHead(),4)
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
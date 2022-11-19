const ll = require('./linkedLists');
for(let i = 0; i < 10; i++){
        ll.append(i)
}
ll.print()


function evenAfterOdd(head){
    let evenHead = null;
    let evenTail = null;
    let oddTail = null;
    let oddHead = null;
    
    while(head){
        if((head.element % 2) == 0){
            if(!evenTail){
                evenHead = head;
                evenTail = head;
            }else{
                evenTail.next = head
                evenTail = head
            }
        }else{
            if(!oddTail){
                oddHead = head;
                oddTail = head
            }else{
                oddTail.next = head
                oddTail = head
            }
        }
        head = head.next;
    }

    if(!oddTail){
        return evenHead
    }
    if(!evenTail){
        return oddHead
    }
    oddTail.next = null
    evenTail.next = null;

    oddTail.next = evenHead
    return oddHead
}



let head = evenAfterOdd(ll.getHead())
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
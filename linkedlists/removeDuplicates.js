const ll = require('./linkedLists')

ll.append(1); 
ll.append(1); 
ll.append(2);
ll.append(2);
ll.append(3);
ll.append(3);
ll.append(4);
ll.append(4);
ll.append(5);
ll.append(5);


function removeDuplicates(ll){
    let head = ll.getHead();
    let current = head.next;
    let prev = head;
    while(current){
        if(prev.element == current.element){
            prev.next = current.next
            current = prev.next
        }else{
            prev = current
            current = current.next
        }
    }

    return head
}

let head = removeDuplicates(ll)
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
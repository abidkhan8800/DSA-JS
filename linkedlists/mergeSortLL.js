const ll = require('./linkedLists')

ll.append(1); 
ll.append(5);
ll.append(11); 
ll.append(4);
ll.append(6);
ll.append(10);
ll.append(45);

ll.print()

function midPoint(head){
    let slow = head;
    let fast = head;

    while(!fast.next && !fast.next.next){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}

function mergeTwoSortedLL(h1, h2){
    if(!h1){
        return h2;
    }
    if(!h2){
        return h1
    }
    let result = null
    if(h1.element < h2.element){
        result = h1;
        result.next = mergeTwoSortedLL(h1.next, h2)
    }else{
        result = h2;
        result.next = mergeTwoSortedLL(h1, h2.next)
    }

    return result;
}

function mergeSort(head){
    if(!head || !head.next){
        return head;
    }

    let mid = midPoint(head);
    let tempHead = mid.next;
    mid.next = null;
    // console.log(mid)

    let head1 = mergeSort(head);
    let head2 = mergeSort(tempHead)

    let final = mergeTwoSortedLL(head1, head2)

    return final
}


let head = mergeSort(ll.getHead())
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
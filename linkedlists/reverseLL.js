const ll = require('./linkedLists');
for(let i = 0; i< 10; i++){
    ll.append(i+1)
}
ll.print()


function reverseLL(head){
    if(!head || !head.next){
        return head;
    }
    let smallHead = reverseLL(head.next);
    let current = smallHead;

    while(current && current.next !== null){
        current = current.next
    }
    current.next = head;
    head.next = null

    return smallHead
}

// let head = reverseLL(ll.getHead())
// let output = []
// while(head){
//     output.push(head.element)
//     head = head.next
// }

// console.log(output.join("->"))

function reverseLL2(head){
    if(!head || !head.next){
        return {smallHead: head, smallTail: head};
    }
    let {smallHead, smallTail} = reverseLL2(head.next);

    smallTail.next = head;
    head.next = null

    return {smallHead: smallHead, smallTail: head}
}

// let {smallHead: smallHead2} = reverseLL2(ll.getHead())
// let output2 = []
// while(smallHead2){
//     output2.push(smallHead2.element)
//     smallHead2 = smallHead2.next
// }

// console.log(output2.join("->"))


function reverseLL3(head){
    if(!head || !head.next){
        return  head;
    }
    let smallHead = reverseLL3(head.next);
    let tail = head.next
    tail.next = head;
    head.next = null

    return smallHead
}

// function reverseLL3(head){
//     if(!head || !head.next){
//         return  {smallHead: head, smallTail: head};
//     }
//     let {smallHead} = reverseLL3(head.next);
//     let tail = head.next
//     tail.next = head;
//     head.next = null

//     return {smallHead: smallHead, smallTail: head}
// }

let  smallHead3 = reverseLL3(ll.getHead())
let output3= []
while(smallHead3){
    output3.push(smallHead3.element)
    smallHead3 = smallHead3.next
}

console.log(output3.join("->"))
const ll = require('./linkedLists');
for(let i = 0; i < 10; i++){
        ll.append(i)
}
ll.print()


function swapTwoNodes(head, i, j){
    let current = head;
    let k = 0;
    let node1,node2;
    let temp = ""
    while (current){
        if(k == i){
            node1 = current
        }
        if(k == j){
            node2 = current
        }
        k++
        current = current.next
    }

    temp = node1.element;
    node1.element = node2.element;
    node2.element = temp;

    return head
}


let head = swapTwoNodes(ll.getHead(),1,5)
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
const ll = require('./linkedLists')

ll.append(11);
ll.append(1);
ll.append(45); 
ll.append(5);
ll.append(10);
ll.append(4);
ll.append(6);


ll.print()

function length(h){
    let count = 0;
    while(h){
        h = h.next;
        count++;
    }
    return count
}

function bubbleSort(head){
    if(!head || !head.next){
        return head;
    }
    let n = length(head)
    for(let i = 0; i < n; i++){
        let prev = null, current = head, fwd = null;

        for(let j =0; j < n - i - 1; j++){
            if(current.element <= current.next.element){
                prev = current;
                current = current.next
            }else{
                if(!prev){
                    fwd = current.next;
                    head = head.next
                    current.next = fwd.next;
                    fwd.next = current
                    prev = fwd
                }else{
                    fwd = current.next;
                    prev.next = fwd
                    current.next = fwd.next;
                    fwd.next = current
                    prev = fwd
                }
            }
        }
    }
    return head;
}


let head = bubbleSort(ll.getHead())
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))


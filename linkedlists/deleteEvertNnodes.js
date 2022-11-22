const ll = require('./linkedLists');
for(let i = 0; i < 10; i++){
        ll.append(i+1)
}
ll.print()


function deleteNnodes(head, m, n){
    if(m == 0){
        return null
    }
    let prev = null, current = head;
    while(current){
        let i=0,j=0;
        while(current && i<m){
            if(!prev){
                prev = current
            }else{
                prev.next = current
                prev = current
            }
            current = current.next;
            i++;
        }
        while(current && j < n){
            current = current.next;
            j++;
        }

        if(prev){
            prev.next = null;
        }
    }


    return head;
}


let head = deleteNnodes(ll.getHead(),4,2)
let output = []
while(head){
    output.push(head.element)
    head = head.next
}

console.log(output.join("->"))
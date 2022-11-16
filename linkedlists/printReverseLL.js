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



function reverse(head){
    if(!head){
        return head
    }

    reverse(head.next);
    console.log(head.element)
}

reverse(ll.getHead())
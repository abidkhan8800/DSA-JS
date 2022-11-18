const ll = require('./linkedLists')

ll.append(1); 
ll.append(5);
ll.append(11); 
ll.append(4);
ll.append(6);
ll.append(10);
ll.append(45);

ll.print()


function findNode2(head, num, ind){
    if(!head){
        return -1
    }

    if(head.element == num){
        return ind
    }

    return findNode2(head.next, num, ind + 1)
}


console.log(findNode2(ll.getHead(), 100, 0))
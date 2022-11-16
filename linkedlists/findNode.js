const ll = require('./linkedLists')

for(let i = 0; i< 10; i++){
    ll.append(i+1)
}
ll.print()

function findNode(ll, num){
    let current = ll.getHead();
    let count = 0
    while(current){
        if(current.element == num){
            return count
        }
        count++;
        current = current.next
    }

    return -1
}


console.log(findNode(ll, 1))
function LinkedList(){
    
    let Node = function(item){
        this.element = item;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(value){
        let node = new Node(value);
        let current = null;

        if(head == null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++
        return true;
    }

    this.insert = function(position,value){
        if(position > -1 && position < length){
            let current = head,
            previous = null,
            index = 0;
            let node = new Node(value)
            if(position == 0){
                head = node;
                node.next = current;
            }else if(position == length - 1){
                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current.next
            }

            length++;
            return true;
        }else{
            return false;
        }
    }

    this.indexOf = function(value){
        let current = head;
        let index = 0;
        if(current == null){
            return -1
        }
        while(current.next){
            if(current.element == value){
                break;
            }
            current = current.next;
            index++
        }
        return index
    }

    this.remove = function(element){
        let index = this.indexOf(element)
        this.removeAt(index, element)
    }

    this.removeAt = function(position){
        if(position > -1 && position < length){
            let current = head,
            previous = null,
            index = 0;

            if(position == 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }

            length--;
            return current.element
        }else{
            return null;
        }
    }

    this.size = function(){
        return length;
    }
    
    this.toString = function(){
        let current = head;
        let output = []

        while(current){
            output.push(current.element) 
            current = current.next
        }

        console.log(output.join("->"))
    };

    this.print = function(){

        let current = head;
        let output = []

        while(current){
            output.push(current.element) 
            current = current.next
        }

        console.log(output.join("->"))
        return
    };

    this.getHead = function (){
        return head;
    }
}
const ll = new LinkedList();
const ll2 = new LinkedList();

for(let i = 0; i< 10; i++){
    if(i%2 == 0){
        console.log("ll",i)
        ll.append(i)
    }
}
for(let i = 0; i< 10; i++){
    if(i%2 != 0){
        console.log("ll2",i)
        ll2.append(i)
    }
}
ll.print()
ll2.print()

function mergeTwoSortedLL(h1, h2){
    let fh; // first head
    let ft; // first tail
    if(h1.element < h2.element){
        fh = h1;
        ft = h1;
        h1 = h1.next;
    }else{
        fh = h2;
        ft = h2;
        h2 = h2.next;
    }

    while(h1 && h2){
        if(h1.element < h2.element){
            ft.next = h1;
            ft = ft.next;
            h1 = h1.next
        }else{
            ft.next = h2;
            ft = ft.next;
            h2 = h2.next
        }
    }
}
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
module.exports = ll;



// ll.append(6); 
// ll.append(5);
// ll.append(7);
// ll.append(8);
// ll.append(2);
// ll.append(4);
// ll.append(16);
// ll.append(25);
// ll.append(47);
// ll.append(85);
// ll.append(25);
// ll.append(34);
// ll.print()
// // ll.removeAt()
// // ll.remove()
// // ll.remove()
// ll.remove(47)
// // ll.insert(11, 1000)
// ll.print()

// console.log(ll.getHead());
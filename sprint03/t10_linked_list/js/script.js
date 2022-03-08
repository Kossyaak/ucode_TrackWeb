class Node {

    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
 

    add(element) {
        let node = new Node(element);
 
        let current;
 

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
 

            while (current.next) {
                current = current.next;
            }
 

            current.next = node;
        }
        this.size++;
    }
    remove(element) {
        let current = this.head;
        let prev = null;
 

        while (current != null) {

            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
 

    contains(element) {
        let count = 0;
        let current = this.head;
 

        while (current != null) {

            if (current.element === element)
                return true;
            count++;
            current = current.next;
        }
 

        return -1;
    }
 
 
    isEmpty() {
        return this.size == 0;
    }
 

    count() {
        return this.size;
    }
    [Symbol.iterator]() {
        let node = this

        return {
            next() {
                let value
                let done = true

                if (node !== null) {
                    value = node.data
                    done = false
                    node = node.next
                }

                return {
                    value: value, done: done
                }
            }
        }
    }
    clear() {
        let node = this

        while (node.next != null) {
            delete node.next.data
            node.next = node.next.next
        }

        delete this.data
        this.next = null
    }

    log() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }
 
}
function createLinkedList(arr) {
    let ll = new LinkedList(arr[0])
    for (let i = 1; i < arr.length; i++) {
        ll.add(arr[i])
    }
    return ll
}
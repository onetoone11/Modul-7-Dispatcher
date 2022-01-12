class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
    }

    insert(...data) {
        for(let i = 0; i < data.length; i++) {
            let t = new Node(data[i]);
            t.next = this.head;
            if(this.length() > 0) {
                this.head.prev = t;
            }
            this.head = t;
        }
    }

    deleteTail() {
        let t = this.head;
        while(t.next.next != null) {
            t = t.next;
        }
        t.next = null;
    }

    deleteHead() {
        if(this.head !== null) {
            this.head = this.head.next;
        }
    }

    showAll() {
        let t = this.head;
        while(t) {
            console.log(t.data);
            t = t.next;
        }
    }

    length() {
        let t = this.head;
        let count = 0;
        while(t) {
            count++;
            t = t.next;
        }
        return count;
    }

    generate(num) {
        for(let i = 0; i < num; i++) {
            this.insert(Math.ceil(Math.random()*1000));
        }
    }
}

let list = new DoubleLinkedList;


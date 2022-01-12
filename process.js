class Process {
    constructor(name, execTime, priority) {
        this.name = name;
        this.execTime = execTime;
        this.priority = priority;
        this.remainingTime = this.execTime;
    }
}

class Node1 {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class Node2 {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class Node3 {
    constructor(data, priority=0, prev=null, next=null) {
        this.data = data;
        this.priority = priority;
        this.prev = prev;
        this.next = next;
    }
}

class CPU1 {
    constructor() {
        this.head = null;
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

    add(data) {
        // for(let i = 0; i < data.length; i++) {
        //     let t = new Node(data[i]);
        //     t.next = this.head;
        //     this.head = t;
        // }
        const add2 = list => data => {
            if(list === null) {
                return new Process()
            }
        }
    }

    remove() { //dequeue(remove head, return head data)
        let t = this.head.data;
        if(this.head !== null) {
            this.head = this.head.next;
        }
        return t;
    }

    work(ms) {

    }
}

class CPU2 {
    constructor() {
        this.head = null;
    }

    add(process) {
        let t = new Node1(process);
        t.next = this.head;
        this.head = t;
    }

    remove(process) {
        let t = this.head.data;
        if(this.head !== null) {
            this.head = this.head.next;
        }
    }

    length() {
        const length2 = list => list === false ? 0 : 1 + length2(list.next);
        return length2(this.head);
    }

    work(ms) {
        ms = ms/this.length();
        while(ms > 0) {
            for(let i = 0; i < this.length(); i++) {
                
            }
            ms--;
        }
    }
}

class CPU3 {
    constructor() {
        this.head = null;
    }

    add(process) {

    }

    remove() {

    }

    work(ms) {

    }
}


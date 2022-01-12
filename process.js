class Process {
    constructor(name, execTime, priority) {
        this.name = name;
        this.execTime = execTime;
        this.priority = priority;
        this.remainingTime = this.execTime;
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
        this.array = [];
    }



    add(data) { //enqueue
        this.array.push(data);
    }

    remove() { //dequeue(remove head, return head data)
        this.array.shift();
    }

    work(ms) {
        var timer = setInterval(function work2() {
            if(ms > 0) {
                let temp = this.array[0];
                if(temp.remainingTime <= 0) {
                    this.remove();
                    console.log("finished with a task");
                } else {

                }
            } else {
                clearInterval(timer);
                return;
            }
            ms--;
        }, 100);
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
        var timer = setInterval(work2,1);

        function work2() {

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


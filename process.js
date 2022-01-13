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
        let temp = this.array;
        var timer = setInterval(function work2() {
            if(temp.length !== 0) {
                if(ms > 0) {
                    if(temp[0].remainingTime <= 1) {
                        console.log(`finished with ${temp[0].name}`);
                        temp.shift();
                    } else {
                        temp[0].remainingTime -= 1;
                    }
                } else {
                    clearInterval(timer);
                    console.log('Time alotted has run out');
                    return;
                }
            } else {
                clearInterval(timer);
                console.log('No tasks left!');
                return;
            }
            ms--;
            console.log(ms);
        }, 10);
        this.array = temp;
    }
}

let CPU = new CPU1();
let a = new Process("hello", 100, 5);
let b = new Process("hell4", 50, 3);
let c = new Process("hhhhhhh", 50, 3);
CPU.add(a);
CPU.add(b);
CPU.add(c);
CPU.work(300);

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

class Dispatcher {
    constructor(tasks, workLoad) {
        this.workLoad = workLoad;
        this.tasks = tasks;
        this.CPUs = [];
    }

    start() {
        if(this.CPUs !==)
        this.CPUs = [new CPU1(), new CPU2, new CPU3];
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < this.tasks.length; j++) {
                
            }
        }
    }

    setWorkload() {

    }

    addTasks() {

    }
}


function Scheduler() {

}


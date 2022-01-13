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
        // this.work_name = work_name;
        // this.work_time = work_time;
        // this.work_prio = work_prio;
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
            // console.log(ms);
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
        this.length = 0;
    }

    add(process) {

        if(this.length == 0){
            // let t = new Node2(process);
            // t.next = this.head;
            this.head = new Node2(process);
        }
        else if(this.length == 1){
            let t = this.head
            let temp = new Node2(process);

            t.next = temp;
            temp.next = this.head;

            this.head = t;
        }
        else{
            this.length = this.length + 1;
            return hmm(this.head, this.length, this.head);
        }

        function hmm(pos, length, head){

            if(length == 2){
                let temp = new Node2(process);
                temp.next = head;
                pos.next = temp;
            }
            else{
                return hmm(pos.next, length-1, head);
            }
        }

        // length 
        this.length = this.length + 1;
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

let cpu2 = new CPU2();
let ab = new Process('hello1', 50, 5);
let bc = new Process('hello2', 50, 5);
let cd = new Process('hello3', 50, 5);
let de = new Process('hello4', 50, 5);
cpu2.add(ab);
cpu2.add(bc);
cpu2.add(cd);
cpu2.add(de);

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
        if(this.CPUs !==1)
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


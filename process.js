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
            return makeCircle(this.head, this.length, this.head);
        }

        function makeCircle(pos, length, head){

            if(length == 2){
                let temp = new Node2(process);
                temp.next = head;
                pos.next = temp;
            }
            else{
                return makeCircle(pos.next, length-1, head);
            }
        }

        // length 
        this.length = this.length + 1;
    }

    remove(pos) {

        // this.length = this.length - 1;

        let temp = [];

        // let length = this.length; 

        saveList(pos, this.head, this.length);

        function saveList(pos, head, length){
            pos--;
            length--;
            if(pos == 0){
                return saveList(pos, head.next, length);
            }
            else{
                // temp[temp.length] = [head.data.name, head.data.remainingTime, head.data.priority];
                return saveList(pos, head.next, length);
            }
        }

        console.log('fungerar denna consolen?');
        
        function posRemove(pos, list){



            pos--;
            console.log('pos: ' + pos);

            if(pos == 0){
                console.log('list');
                console.log(list);
                console.log('list.next');
                console.log(list.next);
                list = list.next;
                console.log('list2');
                console.log(list);
                
                // return list;
                // list = 0;
                // return;
                
            }
            else{
                // pos = pos - 1;
                return posRemove(pos, list.next);
            }

        }

        // return posRemove(pos, this.head);
        // let t = this.head.data;
        // if(this.head !== null) {
        //     this.head = this.head.next;
        // }

        // if(this.length > 2){
        //     return hmm(this.head, this.length, this.head, pos)
        // }
        // else{
        //     console.log('hmm');
        // }

        // function hmm(list, pos){
            
        //     if(pos == 2){
        //         console.log(list);
        //         list.next = list;
        //     }
        //     else{
        //         return hmm(list.next, pos-1);
        //     }

        // }
    }

    length() {
        const length2 = list => list === false ? 0 : 1 + length2(list.next);
        return length2(this.head);
    }

    work(ms) {
        // ms = ms/this.length;
        
        // var timer = setInterval(work2,1);

        function work2(list, ms){
            if(ms == 0){
                return;
            }
            else{
                // ms--; 
                
                if(list.data.remainingTime == 0){
                    // remove
                    // list.data.remainingTime = list.data.remainingTime - 1;
                    work2(list.next, ms);
                }
                else{
                    list.data.remainingTime = list.data.remainingTime - 1;
                    work2(list.next, ms-1); 
                }
                
                
            }
        }
        return work2(this.head, ms);
        console.log('finns denna?');
        
        // function work2(list, ms, length) {
        //     if(length == 0){
        //         console.log('klart');
        //     }
        //     else{
        //         if(list.data.remainingTime > ms){
        //             list.data.remainingTime = list.data.remainingTime - ms;
        //         }
        //         else if(list.data.remainingTime == ms){
        //             // Remove, men inget över
        //             list.data.remainingTime = list.data.remainingTime - ms;

        //             // remove()
        //         }
        //         else{
        //             // Remove, men kör en work igen.
        //             list.data.remainingTime = list.data.remainingTime - ms;
        //             let newMs = list.data.remainingTime * (-1); 
        //             // detta måste fixas
        //         }
                
        //         return work2(list.next, ms, length-1);
        //     }
        // }

    }
}

let cpu2 = new CPU2();
let ab = new Process('hello1', 2, 5);
let bc = new Process('hello2', 6, 5);
let cd = new Process('hello3', 7, 5);
let de = new Process('hello4', 8, 5);
let ef = new Process('hello4', 9, 5);
cpu2.add(ab);
cpu2.add(bc);
cpu2.add(cd);
cpu2.add(de);
cpu2.add(ef);

// cpu2.remove(2);

// cpu2.work(10);

class CPU3 {
    constructor() {
        this.head = null;
    }

    add(process) {
        let t = new Node3(process, process.priority);
        t.next = this.head;
        if(this.length() > 0) {
            this.head.prev = t;
        }
        this.head = t;
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
        this.CPUs = [new CPU1(), new CPU2(), new CPU3()];
    }

    start() {
        if(this.CPUs.length === 3) {
            for(let i = 0; i < 3; i++) {
                for(let j = 0; j < this.tasks.length; j++) {
                    this.CPUs[i].add(this.tasks[i]);
                }
                this.CPUs[i].work(this.workLoad);
            }
        }
    }

    setWorkload(ms) {
        this.workLoad = ms;
    }

    addTasks(tasks) {
        this.tasks.push(tasks);
    }
}


function Scheduler(work) {

}

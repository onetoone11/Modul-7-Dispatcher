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

let tempArray = [];
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
                addData(myChart2, temp.data.name, temp.data.remainingTime);
                addData(myChart22, temp.data.name, temp.data.remainingTime);
            }
            else{
                return makeCircle(pos.next, length-1, head);
            }
        }

        // length 
        this.length = this.length + 1;
    }

    remove() {

        function removeZero(list, length){

            if(length == 0){
                return;
            }

            if(list.data.remainingTime == 0){
                console.log('dhjkashdkjsasdk');
                return removeZero(list.next, length-1);
                
            }
            else{
                console.log('2');
                tempArray[tempArray.length] = [list.data];
                return removeZero(list.next, length-1);
            }
        }

        removeZero(this.head, this.length);

        if(tempArray == []){
            return
        }
        else{
            this.head = null;
            this.length = 0;
            for(let i = 0; i < tempArray.length; i++){
                this.add(...tempArray[i]);
            }

            // tempArray = [];
        }

        // Grafiskt

        console.log('TempArray');
        console.log(tempArray);

        // CPU_data.CPU_1 = [];
        // for(let i = 0; i < this.length; i++){
        //     CPU_data.CPU_1.push(tempArray[i][0].remainingTime);
        //     // myChar1.update();
        // }

        // // Labels
        // let temp;
        // if(this.length < 5){
        //     temp = 5;
        // }
        // else{
        //     temp = this.length
        // }

        // CPU_labels.CPU_1 = [];
        // for(let j = 0; j < temp; j++){
        //     CPU_labels.CPU_1.push(tempArray[j][0].name);
            
        // }

        // myChar1.update();

        addData(myChar1, 'hello1', 10);
        addData(myChar11, 'hello1', 10);

        // editDataAtPos(myChar1, 0, 'helooIgen');

        tempArray = [];
    }

    length() {
        const length2 = list => list === false ? 0 : 1 + length2(list.next);
        return length2(this.head);
    }

    work(ms) {

        if(ms > 1000){
            return 'Can not work that fast';
        }

        let tot = 0;

        function numMs(list, length){
            if(length == 0){
                return;
            }
            else{
                tot = tot + list.data.remainingTime;
                return numMs(list.next, length-1);
            }
        }

        numMs(this.head, this.length);
        console.log(tot);
        console.log('tot');

        function work2(list, ms, tot){

            if(ms == 0 || tot < 1){
                return;
            }
            else{
                if(list.data.remainingTime == 0){
                    work2(list.next, ms, tot);
                }
                else{
                    list.data.remainingTime = list.data.remainingTime - 1;
                    tot = tot - 1;
                    work2(list.next, ms-1, tot); 
                }
                
                
            }
        }
        work2(this.head, ms, tot);

        // console.log('remove');
        tot = 0;
        this.remove();
    }
}

let cpu2 = new CPU2();
let ab = new Process('hello1', 1000, 5);
let bc = new Process('hello2', 2000, 5);
let cd = new Process('hello3', 3000, 5);
let de = new Process('hello4', 4000, 5);
let ef = new Process('hello4', 5000, 5);
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

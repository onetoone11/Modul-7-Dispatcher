function updateCharts() {
    chartArray[0].map(element => {
        element.data.labels = CPU_labels.CPU_1;
        element.data.datasets[0].data = CPU_data.CPU_1;
        element.update('none');
    });
    chartArray[1].map(element => {
        element.data.labels = CPU_labels.CPU_2;
        element.data.datasets[0].data = CPU_data.CPU_2;
        element.update('none');
    });
    chartArray[2].map(element => {
        element.data.labels = CPU_labels.CPU_3;
        element.data.datasets[0].data = CPU_data.CPU_3;
        element.update('none');
    });
    chartArray[3].map(element => {
        element.data.labels = CPU_labels.CPU_4;
        element.data.datasets[0].data = CPU_data.CPU_4;
        element.update('none');
    });

    // if(CPU_data.CPU__1.length > 0){
        if(CPU_data.CPU__1[CPU_data.CPU__1.length - 1] !== CPU_data.CPU_1.length){
            // console.log(1);
            updateChart();
        }
        else if(CPU_data.CPU__2[CPU_data.CPU__2.length - 1] !== CPU_data.CPU_2.length){
            // console.log(2);
            updateChart();
        }
        else if(CPU_data.CPU__3[CPU_data.CPU__3.length - 1] !== CPU_data.CPU_3.length){
            // console.log(3);
            updateChart();
        }
        else if(CPU_data.CPU__4[CPU_data.CPU__4.length - 1] !== CPU_data.CPU_4.length){
            // console.log(3);
            updateChart();
        }
        else if(CPU_data.workload_ms[CPU_data.workload_ms.length - 1] !== workload){
            updateChart();
        }
    // }
    // else{
    //     updateChart();
    // }

    updateText();
}

function updateChart(){

    CPU_labels.labels.push('');
    CPU_data.CPU__1.push(CPU_data.CPU_1.length);
    CPU_data.CPU__2.push(CPU_data.CPU_2.length);
    CPU_data.CPU__3.push(CPU_data.CPU_3.length);
    CPU_data.CPU__4.push(CPU_data.CPU_4.length);
    CPU_data.workload_ms.push(workload);

    // CPU_labels.labels.push('');
    // CPU_data.CPU__1.push(CPU_data.CPU_1.length);
    // CPU_data.CPU__2.push(CPU_data.CPU_2.length);
    // CPU_data.CPU__3.push(CPU_data.CPU_3.length);

    // myChart5.data.labels = CPU_labels.labels;
    myChart5.data.datasets[0].data = CPU_data.CPU__1;

    // // myChart5.data.labels = CPU_labels.labels;
    myChart5.data.datasets[1].data = CPU_data.CPU__2;

    // myChart5.data.labels = CPU_labels.labels;
    myChart5.data.datasets[2].data = CPU_data.CPU__3;
    myChart6.data.datasets[0].data = CPU_data.workload_ms;

    myChart5.update('none');
    myChart6.update('none');
}


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
    constructor(data, prev=null, next=null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class NodeBST {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class CPU1 {
    constructor() {
        this.array = [];
    }

    update() {
        CPU_data.CPU_1 = this.array.map(element => element.remainingTime);
        CPU_labels.CPU_1 = this.array.map(element => element.name);
    }

    add(data) { //enqueue
        this.array.push(data);
        // CPU_data.CPU__1.push(this.array.length);
        // CPU_labels.labels.push('');
        this.update();
    }

    remove() { //dequeue(remove head, return head data)
        this.array.shift(); 
    }

    work(ms) {
        let temp = this.array;
        while(ms > 0 && this.array.length > 0) {
            if(temp[0].remainingTime <= 0) {
                console.log(`finished with ${temp[0].name}`);
                temp.shift();
                // CPU_data.CPU__1.push(this.array.length);
                // CPU_labels.labels.push('');
                this.update();
            } else {
                temp[0].remainingTime -= 1;
            }
            ms--;
        }
        this.array = temp;
        this.update();
    }
}

let CPU = new CPU1();
let a = new Process("hello", 100, 5);
let b = new Process("hell4", 50, 3);
let c = new Process("hhhhhhh", 50, 3);
// CPU.add(a);
// CPU.add(b);
// CPU.add(c);

let tempArray = [];
class CPU2 {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    update() {
        const add = length => list => {
            if(length === 0) {
                return [];
            }
            return [[list.data.remainingTime, list.data.name],...add(length-1)(list.next)];
        }
        CPU_data.CPU_2 = add(this.length)(this.head).map(element => element[0]);
        CPU_labels.CPU_2 = add(this.length)(this.head).map(element => element[1]);
    }

    add(process) {

        if(this.length == 0){
            this.head = new Node2(process);
            this.head.next = this.head;
            // addData(myChart2, this.head.name, this.head.remainingTime);
            this.length = this.length + 1;
        }
        else if(this.length == 1){
            let t = this.head
            let temp = new Node2(process);

            // addData(myChart2, temp.data.name, temp.data.remainingTime);

            t.next = temp;
            temp.next = this.head;

            this.head = t;
            this.length = this.length + 1;
        }
        else{
            this.length = this.length + 1;
            makeCircle(this.head, this.length, this.head);
        }

        function makeCircle(pos, length, head){

            if(length == 2){
                let temp = new Node2(process);
                temp.next = head;
                pos.next = temp;
                return;
                // addData(myChart2, temp.data.name, temp.data.remainingTime);
                // addData(myChart22, temp.data.name, temp.data.remainingTime);
            }
            else{
                return makeCircle(pos.next, length-1, head);
            }
        }

        // addData(myChart2, 'hello1', 1000);

        // length 
        this.update();
    }

    remove() {

        function removeZero(list, length){

            if(length == 0){
                return;
            }

            if(list.data.remainingTime == 0){

                return removeZero(list.next, length-1);
                
            }
            else{
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

        // removeAll(myChart2, 2);
        // removeAll(myChart22, 2);

        for(let i = 0; i < tempArray.length; i++){
            // addData(myChart2, tempArray[i][0].name, tempArray[i][0].remainingTime);
            editDataAtPos(myChart2, i, tempArray[i][0].remainingTime);
            // addData(myChart22, tempArray[i][0].name, tempArray[i][0].remainingTime);
            myChart2.update();
            // myChart22.update();
        }
        tempArray = [];
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
        tot = 0;
        this.remove();
        this.update();
    }
}

let cpu2 = new CPU2();
let ab = new Process('hello1', 1000, 5);
let bc = new Process('hello2', 2000, 4);
let cd = new Process('hello3', 3000, 3);
let de = new Process('hello4', 4000, 2);
let ef = new Process('hello4', 5000, 1);
// cpu2.add(ab);
// cpu2.add(bc);
// cpu2.add(cd);
// cpu2.add(de);
// cpu2.add(ef);

// cpu2.remove(2);

// cpu2.work(10);

class CPU3 {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    update() {
        const add = length => list => {
            if(length === 0) {
                return [];
            }
            return [[list.data.remainingTime, list.data.name],...add(length-1)(list.next)];
        }
        CPU_data.CPU_3 = add(this.length)(this.head).map(element => element[0]);
        CPU_labels.CPU_3 = add(this.length)(this.head).map(element => element[1]);

        // updateCharts();
    }

    add(process) {

        if(this.length == 0){
            this.head = new Node3(process);
            this.head.next = this.head;
            this.head.prev = this.head;
            this.length = this.length + 1;
        }
        else if(this.length == 1){
            let t = this.head
            let temp = new Node3(process);

            t.next = temp;
            temp.next = this.head;
            temp.prev = this.head;

            this.head = t;
            this.length = this.length + 1;
        }
        else{
            this.length = this.length + 1;
            makeCircle(this.head, this.length, this.head);
        }

        function makeCircle(pos, length, head){

            if(length == 2){
                let temp = new Node3(process);
                temp.next = head;
                temp.prev = pos;
                pos.next = temp;
                head.prev = temp;
            }
            else{
                return makeCircle(pos.next, length-1, head);
            }
        }

        this.update();
    }

    remove() {

        function removeZero(list, length){

            if(length == 0){
                return;
            }

            if(list.data.remainingTime < 1){
                return removeZero(list.next, length-1);
                
            }
            else{
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
                console.log(tempArray[i]);
                this.add(...tempArray[i]);
            }

            // tempArray = [];
        }

        tempArray = [];
    }

    work(ms) {
        // let list = this.head;
        // while(ms > 0) {
        //     list.data.remainingTime -= list.data.priority;
        //     list = list.next;
        //     ms = ms - list.data.priority;
        // }
        // return list;
        let temp = 0;

        tot(this.head, this.length);
        function tot(list, length) {
            if(length === 0) {
                return;
            } else {
                temp += (list.data.priority);
                return tot(list.next,length-1);
            }
        }
        pos(this.head, this.length);

        function pos(list, length) {
            if(length === 0) {
                return;
            } else {
                list.data.remainingTime -= Math.round(list.data.priority*ms/temp);
                return pos(list.next, length-1);
            }
        }
        this.remove();
        this.update();

    }
}

class CPU4 {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    update(){

        const add = list => {
            if( list == null) {
                return [];
            }
            return [[list.data.remainingTime, list.data.name],...add(list.right),...add(list.left)];
        }
        CPU_data.CPU_4 = add(this.head).map(element => element[0]);
        CPU_labels.CPU_4 = add(this.head).map(element => element[1]);

    }

    add(data) {
        const insert2 = data => tree => {
            if(tree === null) {
                return new NodeBST(data);
            }
            if(data.priority > tree.data.priority) {
                tree.right = insert2(data)(tree.right);
            } else {
                tree.left = insert2(data)(tree.left);
            }
            return tree;
        }
        this.length++;
        this.head = insert2(data)(this.head);

        // console.log(this.length);
        this.update();
    }

    remove(){

        let tempArr = [];

        function removeZero(tree){

            if(tree == null){
                return;
            }
            else if(tree.data.remainingTime < 1){
                return removeZero(tree.right) + removeZero(tree.left);
            }
            tempArr.push(tree.data);
            return removeZero(tree.right) + removeZero(tree.left);
        }

        removeZero(this.head);

        if(tempArr == []){
            return;
        }
        else{
            this.head = null;
            this.length = 0;
            for(let i = 0; i < tempArr.length; i++){
                this.add(tempArr[i]);
            }

        }
        tempArr = [];
    }

    work(ms){
        let sum = 0;

        function sumPriority(tree){
            if(tree == null){
                return;
            }
            sum = sum + tree.data.priority;
            // console.log(tree.data.priority);
            return sumPriority(tree.right) + sumPriority(tree.left) + tree.data.priority;
        }
        sumPriority(this.head);

        console.log(sum);

        function everyNode(tree){
            if(tree == null){
                return 0;
            }
            // Math.round(list.data.priority*ms/temp)
            tree.data.remainingTime -= Math.round(tree.data.priority*ms/sum);
            return 1 + everyNode(tree.right) + everyNode(tree.left);
        }
        everyNode(this.head);

        this.remove();
        this.update();
    }

    // remove()

    // traverse() {
    //     const traverse2 = func => tree => {
    //         if(tree === null)
    //     }
    // }
}

let cpu4 = new CPU4();

let cpu3 = new CPU3();
// cpu3.add(ab);
// cpu3.add(bc);
// cpu3.add(cd);
// cpu3.add(de);
// cpu3.add(ef);

class Dispatcher {
    constructor(tasks = [], workLoad = null) {
        this.workLoad = workLoad;
        this.tasks = tasks;
        this.CPUs = [CPU, cpu2, cpu3, cpu4];
    }

    start() {
        // updateChart();
        if(this.CPUs.length === 4) {
            for(let i = 0; i < 4; i++) {
                for(let j = 0; j < this.tasks.length; j++) {
                    this.CPUs[i].add(Object.assign(Object.create(Object.getPrototypeOf(this.tasks[j])), this.tasks[j]));
                }
                
                updateCharts();
                updateText();
                // this.CPUs = Scheduler(this.workLoad, this.CPUs);
            }
            this.tasks = [];
        }
    }

    setWorkload(ms) {
        this.workLoad = ms;
    }

    addTasks(...tasks) {
        this.tasks.push(...tasks);
    }
}

let dispatcher1 = new Dispatcher();


// Parser.js

let commandInput = document.getElementById("commandInput");
let workLoadInput = document.getElementById("workLoad");
let submitBtn = document.getElementById("submitToParser");

let commands;
let workload;

let workload2 = null;

let processList = [];

submitBtn.addEventListener("click", () => {
    commands = commandInput.value;
    workload = Number(workLoadInput.value);
    if(commands == "" && !isNaN(workload) && workload !== "") {
        workload = Number(workLoadInput.value);
    } else {
        if(!isNaN(workload) && workload !== "") {
            if(checkValidity(commands)) {
                makeProcesses(commands, processList);
                dispatcher1.addTasks(...processList);
                dispatcher1.setWorkload(workload);
                dispatcher1.start();
                processList = [];
                // alert("success!");
                updateText();
                setInterval(Scheduler, 100);
    
            }
        }
    } 

    commandInput.value = "";
    workLoadInput.value = "";
});

function checkValidity(string) {
    let temp = string.split("\n").map(element => element.split(/[, ]+/));
    if(temp.some(element => element.length !== 3)) {
        alert("faulty input");
        return false;
    } else {
        if(temp.every(element => !isNaN(element[1]) && !isNaN(element[2]))) {
            return true;
        } else {
            alert("the execution time and priority must be numbers!");
            return false;
        }
    }
}

function makeProcesses(string, list) {
    arr = string.split("\n").map(element => element.split(/[, ]+/));
    arr.map(element => list.push(new Process(element[0], Number(element[1]), Number(element[2]))));
}


function Scheduler() {

    CPU.work(workload);
    cpu2.work(workload);
    cpu3.work(workload);
    cpu4.work(workload);

    updateCharts();

    let speed = document.querySelector('.speed');
    speed.innerHTML = `${workload}`;
}





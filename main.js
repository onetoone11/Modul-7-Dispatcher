// Website HTML

// const { Chart } = require("chart.js");


// ScrollFunctions Start
let topBtn = document.querySelector(".top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function bottomFunction() {
    document.body.scrollTop = 650;
    document.documentElement.scrollTop = 650;
    // topBtn.style.display = 'block';
}
// Scrollfunctions End

// Chart Start
let CPU_data = {//info som delas mellan charts som tillhör samma CPU. 
    CPU_1: [],
    CPU_2: [],
    CPU_3: [],
    CPU_4: [],
    CPU__1:[0],
    CPU__2:[0],
    CPU__3:[0],
    CPU__4:[0],
    workload_ms: [0]
}

let CPU_labels = {
    CPU_1: [],
    CPU_2: [],
    CPU_3: [],
    CPU_4: [],
    labels: ['']
}

let myChar1 = new Chart(document.getElementById('myChart1'), {
    type: 'bar',
    data: {
        labels: CPU_labels.CPU_1,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_1,
            backgroundColor: [
                'rgb(247, 141, 11)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

let myChart2 = new Chart(document.getElementById('myChart2'), {
    type: 'bar',
    data: {
        labels: CPU_labels.CPU_2,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_2,
            backgroundColor: [
                'rgb(247, 141, 11)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

let myChart3 = new Chart(document.getElementById('myChart3'), {
    type: 'bar',
    data: {
        labels: CPU_labels.CPU_3,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_3,
            backgroundColor: [
                'rgb(247, 141, 11)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

let myChart4 = new Chart(document.getElementById('myChart4'), {
    type: 'bar',
    data: {
        labels: CPU_labels.CPU_4,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_4,
            backgroundColor: [
                'rgb(247, 141, 11)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});


// Circular 


let myChar11 = new Chart(document.getElementById('myChart11'), {
    type: 'pie',
    data: {
        labels: CPU_labels.CPU_1,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_1,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
    },
});

let myChart22 = new Chart(document.getElementById('myChart22'), {
    type: 'pie',
    data: {
        labels: CPU_labels.CPU_2,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_2,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
    },
});

let myChart33 = new Chart(document.getElementById('myChart33'), {
    type: 'pie',
    data: {
        labels: CPU_labels.CPU_3,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_3,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
    },
});

let myChart44 = new Chart(document.getElementById('myChart44'), {
    type: 'pie',
    data: {
        labels: CPU_labels.CPU_4,
        datasets: [{
            label: 'Remaining time',
            data: CPU_data.CPU_4,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
    },
});

let chartArray = [[myChar1, myChar11],[myChart2, myChart22],[myChart3, myChart33],[myChart4, myChart44]];


let myChart5 = new Chart(document.getElementById('myChart5'), {
    type: 'line',
    data: {
        labels: CPU_labels.labels,
        datasets: [{
            label: 'CPU1',
            data: CPU_data.CPU__1,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [
                'rgb(255, 99, 132)',
            ],
            borderWidth: 1
        },
        {
            label: 'CPU2',
            data: CPU_data.CPU__2,
            borderColor: 'rgb(255, 159, 64)',
            backgroundColor: [
                'rgb(255, 159, 64)',
            ],
            borderWidth: 1
        },
        {
            label: 'CPU3',
            data: CPU_data.CPU__3,
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: [
                'rgb(255, 205, 86)',
            ],
            borderWidth: 1 
        },
        {
            label: 'CPU4',
            data: CPU_data.CPU__3,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: [
                'rgb(75, 192, 192)',
            ],
            borderWidth: 1 
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});

let myChart6 = new Chart(document.getElementById('myChart6'), {
    type: 'line',
    data: {
        labels: CPU_labels.labels,
        datasets: [{
            label: 'Workload',
            data: CPU_data.workload_ms,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: [
                'rgb(54, 162, 235)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
    },
});


//funktioner för att redigera värdena i Charts
function editDataAtPos(chart, pos, data) {//redigerar datavärde på visst index
    chart.data.datasets[0].data[pos] = data
    chart.update();
}

function editDataWithLabel(chart, label, data) {//redigerar datavärde med viss label
    let index = chart.data.labels.indexOf(label);
    if(index !== -1) {
        editDataAtPos(chart, index, data);
    } else {
        alert("Error, label not found");
    }
}

function addData(chart, label, data) {//lägg till ett till värde i tabellen
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeDataAtPos(chart, pos) {//ta bort data vid given position
    chart.data.datasets.forEach((dataset) => {
        dataset.data.splice(pos,1);
    });
    chart.data.labels.splice(pos,1);
    chart.update();
}

function removeDataWithLabel(chart, label) {//ta bort data med viss label
    let index = chart.data.labels.indexOf(label);
    if(index !== -1) {
        removeDataAtPos(chart, index);
    } else {
        alert("Error, label not found");
    }
}

function removeAll(chart, num) {

    if(num == 1){
        CPU_labels.CPU_1 = [];
        CPU_data.CPU_1 = [];
    }
    else if(num == 2){
        CPU_labels.CPU_2 = [];
        CPU_data.CPU_2 = [];
    }
    else if(num == 3){
        CPU_labels.CPU_3 = [];
        CPU_data.CPU_3 = [];
    }
    chart.data.labels = [];
    chart.data.datasets[0].data = [];
    chart.update();
}

// Chart End


const LIST = head => tail => f => f(head)(tail);
const L = LIST;
const compose = f => g => a => f(g(a));
const TRUE = a => b => a;
const FALSE = a => b => b;
const value = a => a(TRUE);
const next = a => a(FALSE);

const TREE = LIST;
const FOREST = TREE;

// const BST
//f is a function which takes two arguments, one function and one value for that function to act on
//
const fix = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))));
const l1 = L(3)(L(4)(L(9)(L(5)(L(7)(false)))));
const foldr = base => func => fix(f => list => list === false ? base : func(value(list))(f(next(list))));
const concat = list1 => foldr(list1)(a => b => LIST(a)(b));
const removeFront = list => num => num === 0 || list === false ? list : removeFront(next(list))(num - 1);
const removeEnd = list => num => num === 0 || list === false ? false : LIST(value(list))(removeEnd(next(list))(num - 1));
const createLinkedList = (...x) => x.length === 0 ? false : LIST(x[0])(createLinkedList(...x.slice(1)));
const toArray = foldr([])(a => b => [a, ...b]);
// necessary functions(length, deleteHead, deleteTail, insert, showAll, sort, generate)
const length = foldr(0)(x => y => 1 + y);
const deleteHead = next;
const deleteTail = list => next(list) === false ? false : LIST(value(list))(deleteTail(next(list)));
const insert = list => value => LIST(value)(list);
const showAll = list => 'Linked List: [' + toArray(list).join(', ') + ']';
const generate = list => num => num === 0 ? list : LIST(Math.ceil(Math.random() * 1000))(generate(list)(num - 1));


const foldrList = func => base => fix(f => list => list === false ? base : func(value(list))(f(next(list))));

// const foldrTree = func => base => fix(f => tree => {
//     if(tree === false) {
//         return base;
//     }
//     //leaf nodes are trees with empty forests

//     return func(value(tree))(foldrList(base)(f)(next(tree)));
// });

// foldt(f)(z)([]) = z;
// foldt(f)(z)([x]) = f(x)(z);
// foldt(f)(z)(xs) = foldt(f)(z)(pairs(f)(xs));

// foldr(f)(z)([])     = z
// foldr(f)(z)(x:xs) = f(x)(foldr(f)(z)(xs))

// If the list is empty, the result is the initial value z. 
// If not, apply f to the first element and the result of folding the rest.



/*
class Node {
    constructor(data, next = null) {
        this.head = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // insert(...data) {
    //     for(let i = 0; i < data.length; i++) {
    //         let t = new Node(data[i]);
    //         t.next = this.head;
    //         this.head = t;
    //     }
    // }

    insert(data) {

    }

    length() {
        let t = this.head;
        let count = 0;
        while (t) {
            count++;
            t = t.next;
        }
        return count;
    }

    deleteTail() {
        let t = this.head;
        while (t.next.next != null) {
            t = t.next;
        }
        t.next = null;
    }

    deleteHead() {
        if (this.head !== null) {
            this.head = this.head.next;
        }
    }

    showAll() {
        let t = this.head;
        while (t) {
            console.log(t.head);
            t = t.next;
        }
    }

    generate(num) {
        for (let i = 0; i < num; i++) {
            this.insert(Math.ceil(Math.random() * 1000));
        }
    }

    sort() {
        // const mergeSort = 
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(data) {
        this.length += 1;
        let t = new Node(data);
        if (this.head === null) {
            t.next = t;
            this.head = t;
        } else {
            t.next = this.head;
            const traverse = list => data => pos => {
                if (pos === 0) {
                    return data;
                } else {
                    list.next = traverse(list.next)(data)(pos - 1)
                }
                return list;
            }
            this.head = traverse(this.head)(t)(this.length);
        }
    }
}

// let l = new CircularLinkedList();


var tree = {
    value: 1,
    forest: [
        {
            value: 2,
            forest: []
        },
        {},
        {},
    ]
}












showAll(l1)
// var obj = {
//     head: 10,
//     tail: {
//         head: 20,
//         tail: {

//         }
//     }
// }

// function toArray2(list) {
//     let temp = [];
//     while(list !== false) {
//         temp.push(value(list));
//         list = deleteHead(list);
//     }
//     console.log(temp.join(", "));
// }

*/
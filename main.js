// Website HTML

const { Chart } = require("chart.js");


// ScrollFunctions Start
let topBtn = document.querySelector(".top");
        
window.onscroll = function() {scrollFunction()};

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

function bottomFunction(){
    document.body.scrollTop = 650;
    document.documentElement.scrollTop = 650;
    // topBtn.style.display = 'block';
}
// Scrollfunctions End

// Chart Start

// const data2 = {
//     labels: ['Delete data', 'Copy RAM', 'Print text', 'Input Handle', ''],
//     datasets: [{
//       label: 'Remaining time',
//       data: [50, 890, 220, 30,],
//       backgroundColor: [
//         'rgb(247, 141, 11)'
//         // 'rgba(255, 26, 104, 0.2)',
//         // 'rgba(54, 162, 235, 0.2)',
//         // 'rgba(255, 206, 86, 0.2)',
//         // 'rgba(75, 192, 192, 0.2)',
//         // 'rgba(153, 102, 255, 0.2)',
//         // 'rgba(255, 159, 64, 0.2)',
//         // 'rgba(0, 0, 0, 0.2)'
//       ],
//     //   borderColor: [
//     //     'rgba(255, 26, 104, 1)',
//     //     'rgba(54, 162, 235, 1)',
//     //     'rgba(255, 206, 86, 1)',
//     //     'rgba(75, 192, 192, 1)',
//     //     'rgba(153, 102, 255, 1)',
//     //     'rgba(255, 159, 64, 1)',
//     //     'rgba(0, 0, 0, 1)'
//     //   ],
//       borderWidth: 1
//     }]
//   };

//   // config 
//   const config2 = {
//     type: 'bar',
//     data2,
//     options: {
//         maintainAspectRatio: false,
//     //   plugins: {
//     //       autocolors: false,
//     //       annotation: {
//     //           annotations: {
//     //               box1: {
//     //                   type: 'box',
//     //                   xMin: 0.5,
//     //                   xMax: 1.5,
//     //                   yMin: 0,
//     //                   yMax: 2
//     //               }
//     //           }
//     //       }
//     //   },
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//     // plugins: ['chartjs-plugin-annotation']
//   };

//   // render init block
//   const myChart1 = new Chart(
//     document.getElementById('myChart1'),
//     config2
//   );


//   Chart 1

// const data1 = {
//     labels: ['Delete data', 'Copy RAM', 'Print text', 'Input Handle', ''],
//     datasets: [{
//       label: 'Remaining time',
//       data: [50, 890, 220, 30,],
//       backgroundColor: [
//         'rgb(247, 141, 11)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   // config 
//   const config1 = {
//     type: 'bar',
//     data1,
//     options: {
//         maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };



  // // render init block
//   const myChart1 = new Chart(
//     document.getElementById('myChart1'),
//     config1
//   );


const myChart1 = new Chart(document.getElementById('myChart1'), {
    type: 'bar',
    data: {
        labels: ['Delete data', 'Copy RAM', 'Print text', 'Input Handle', ''],
        datasets: [{
            label: 'Remaining time',
            data: [50, 890, 220, 30,],
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

// //   Chart 2

// const data = {
//     labels: ['Delete data', 'Copy RAM', 'Print text', 'Input Handle', ''],
//     datasets: [{
//       label: 'Remaining time',
//       data: [50, 890, 220, 30,],
//       backgroundColor: [
//         'rgb(247, 141, 11)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   // config 
//   const config = {
//     type: 'bar',
//     data,
//     options: {
//         maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };



//   // // render init block
//   const myChart2 = new Chart(
//     document.getElementById('myChart2'),
//     config
//   );



  //   Chart 3

// const data3 = {
//     labels: ['Delete data', 'Copy RAM', 'Print text', 'Input Handle', ''],
//     datasets: [{
//       label: 'Remaining time',
//       data: [50, 890, 220, 30,],
//       backgroundColor: [
//         'rgb(247, 141, 11)'
//       ],
//       borderWidth: 1
//     }]
//   };

//   // config 
//   const config3 = {
//     type: 'bar',
//     data,
//     options: {
//         maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };



//   // // render init block
//   const myChart3 = new Chart(
//     document.getElementById('myChart3'),
//     config3
//   );

// Chart End







const LIST = head => tail => f => f(head)(tail);
const L = LIST;
const compose = f => g => a => f(g(a));
const TRUE = a => b => a;
const FALSE = a => b => b;
const value = a => a(TRUE);
const next = a => a(FALSE);

// const BST
//f is a function which takes two arguments, one function and one value for that function to act on
//
const fix = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))));

const l1 = L(3)(L(4)(L(9)(L(5)(L(7)(false)))));


const foldr = base => func => fix(f => list => list === false ? base : func(value(list))(f(next(list))));

const concat = list1 => foldr(list1)(a => b => LIST(a)(b));

const removeFront = list => num => num === 0 || list === false ? list : removeFront(next(list))(num-1);

const removeEnd = list => num => num === 0 || list === false ? false : LIST(value(list))(removeEnd(next(list))(num-1));

const createLinkedList = (...x) => x.length === 0 ? false : LIST(x[0])(createLinkedList(...x.slice(1)));

const toArray = foldr([])(a => b => [a,...b]);

// necessary functions(length, deleteHead, deleteTail, insert, showAll, sort, generate)

const length = foldr(0)(x => y => 1 + y);

const deleteHead = next;

const deleteTail = list => next(list) === false ? false : LIST(value(list))(deleteTail(next(list)));

const insert = list => value => LIST(value)(list);

const showAll = list => 'Linked List: [' + toArray(list).join(', ') + ']';

const generate = list => num => num === 0 ? list : LIST(Math.ceil(Math.random()*1000))(generate(list)(num-1));

//binary search tree

const insertBST = tree => data => {
    if(tree === false) {
        return LIST(data)(false);
    }
    if(data > value(tree)) {

    }
}



class Node {
    constructor(data, next=null) {
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
        while(t) {
            count++;
            t = t.next;
        }
        return count;
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
            console.log(t.head);
            t = t.next;
        }
    }

    generate(num) {
        for(let i = 0; i < num; i++) {
            this.insert(Math.ceil(Math.random()*1000));
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
        if(this.head === null) {
            t.next = t;
            this.head = t;
        } else {
            t.next = this.head;
            const traverse = list => data => pos => {
                if(pos === 0) {
                    return data;
                } else {
                    list.next = traverse(list.next)(data)(pos-1)
                }
                return list;
            }
            this.head = traverse(this.head)(t)(this.length);
        }
    }
}

// let l = new CircularLinkedList();















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
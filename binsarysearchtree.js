class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const insert2 = data => tree => {
            if(tree === null) {
                return new Node(data);
            }
            if(data > tree.data) {
                tree.right = insert2(data)(tree.right);
            } else {
                tree.left = insert2(data)(tree.left);
            }
            return tree;
        }
        this.head = insert2(data)(this.head);
    }

    length() {
        const length2 = tree => {
            if(tree === null) {
                return 0;
            } else {
                return 1 + length2(tree.right) + length2(tree.left);
            }
        }
        return length2(this.head);
    }

    generate(num) {
        for(let i = 0; i < num; i++) {
            this.insert(Math.ceil(Math.random()*1000));
        }
    }

    sort() {
        return this.head;
    }
 
}

let list = new BST();



// import chart from 'chart.js';
// var ctx = document.getElementById('myChart');
// var myChart = new chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

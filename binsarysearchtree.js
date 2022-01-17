
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const fix = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))));
// const foldr = base => func => fix(f => tree => {
//     if(tree === null) {
//         return base;
//     }

//     return func(tree.data)(f(tree.left))(f(tree.right));
// });
const foldrList = base => func => fix(f => list => list === false ? base : func(value(list))(f(next(list))));

const foldrTree = base => func => fix(f => tree => {
    if(tree === false) {
        return base;
    }
    //leaf nodes are trees with empty forests

    return func(value(tree))(foldrList(base)(f));
});

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
        // const length2 = tree => {
        //     if(tree === null) {
        //         return 0;
        //     } else {
        //         return 1 + length2(tree.right) + length2(tree.left);
        //     }
        // }
        // return length2(this.head);
        const length2 = tree => tree === null ? 0 : 1 + length2(tree.right) + length2(tree.left);
        return length2(this.head);
    }

    height() {
        const depth2 = root => root === null ? 0 : Math.max(depth2(root.left), depth2(root.right)) + 1;
        return depth2(this.head);
    }

    generate(num) {
        for(let i = 0; i < num; i++) {
            this.insert(Math.ceil(Math.random()*1000));
        }
    }

    balance() {
        const bal2 = tree => {
            if(tree === null) {
                return [];
            }
            return [tree.data,...bal2(tree.right)];
        }
        return bal2(this.head);
    }

    sort() {
        return this.head;
    }
 
}

let list = new BST();

// const TREE = a => b => c => f => f(a)(b)(c);

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

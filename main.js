const LIST = head => tail => f => f(head)(tail);
const L = LIST;
const compose = f => g => a => f(g(a));
const TRUE = a => b => a;
const FALSE = a => b => b;
const value = a => a(TRUE);
const next = a => a(FALSE);
const Y = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))));
//f is a function which takes two arguments, one function and one value for that function to act on
//
const fix = (f => (x => f(v => x(x)(v)))(x => f(v => x(x)(v))));

const l1 = L(3)(L(4)(L(9)(L(5)(L(7)(false)))));


const foldr = base => func => fix(f => list => list === false ? base : func(value(list))(f(next(list))));

const concat = list1 => foldr(list1)(a => b => LIST(a)(b));

const removeFront = list => num => num === 0 || list === false ? list : removeFront(next(list))(num-1);

const removeEnd = list => num => num === 0 || list === false ? false : LIST(value(list))(removeEnd(next(list))(num-1));

const createLinkedList = (...x) => x.length === 0 ? false : LIST(x[0])(createLinkedList([...x,]));

const toArray = foldr([])(a => b => [a,...b]);

// necessary functions(length, deleteHead, deleteTail, insert, showAll, sort, generate)

const length = foldr(0)(x => y => 1 + y);

const deleteHead = next;

const deleteTail = list => next(list) === false ? false : LIST(value(list))(deleteTail(next(list)));

// const insert = list => pos => value => concat(concat(removeFront(list)(pos))(LIST(value)(false)))(removeEnd(list)(pos));


const insert = list => pos => value => {
    if(pos === 0 || list === false) {
        return false;
    }
}

const showAll = list => console.log('Linked List: [' + toArray(list).join(', ') + ']');

class Node {
    constructor(data, next=null) {
        this.head = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(...data) {
        for(let i = 0; i < data.length; i++) {
            let t = new Node(data[i]);
            t.next = this.head;
            this.head = t;
        }
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
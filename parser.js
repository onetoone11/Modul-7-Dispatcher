// class Process {
//     constructor(name, execTime, priority) {
//         this.name = name;
//         this.execTime = execTime;
//         this.priority = priority;
//         this.remainingTime = this.execTime;
//     }
// }

let commandInput = document.getElementById("commandInput");
let workLoadInput = document.getElementById("workLoad");
let submitBtn = document.getElementById("submitToParser");

let commands;
let workload;

let processList = [];

submitBtn.addEventListener("click", () => {
    commands = commandInput.value;
    workload = Number(workLoadInput.value);
    if(!isNaN(workload) && workload !== "") {
        if(checkValidity(commands)) {
            makeProcesses(commands, processList);
            alert("success!");

        }
    } else {
        alert("workload must be a number!");
    }

    commandInput.value = "";
    workLoadInput.value = "";
});

function checkValidity(string) {
    let temp = string.split("\n").map(element => element.split(" "));
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
    arr = string.split("\n").map(element => element.split(" "));
    arr.map(element => list.push(new Process(element[0], Number(element[1]), Number(element[2]))));
}

let dispatcher1 = new Dispatcher();
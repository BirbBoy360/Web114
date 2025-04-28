//Ryan Blackwell 4/28/25
"use strict";
const tskBtn = document.getElementById("addTaskBtn");
const tskInput = document.getElementById("taskInput");
const tskList = document.getElementById("taskList");
let newTask;
let liText;
let rmText;

tskBtn.addEventListener("click", function AddItem() {
    newTask = tskInput.value;

    if (newTask == "") {
        alert("Please enter a task first!");
        return;
    }
    
    const li = document.createElement("li");
    liText = document.createTextNode(newTask + " ");
    li.appendChild(liText);

    const rmBtn = document.createElement("Button");
    rmText = document.createTextNode("Remove Task");
    rmBtn.appendChild(rmText);

    li.appendChild(rmBtn);
    tskList.appendChild(li);
    
    rmBtn.addEventListener("click", function removeTask() {
        tskList.removeChild(li);
    })

    tskInput.value = "";

})

//Alternative versions that will apply strikeout to tasks and undo it
//Please disregard the horrible naming conventions

const tskBtn2 = document.getElementById("addTaskBtn2");
const tskInput2 = document.getElementById("taskInput2");
const tskList2 = document.getElementById("taskList2");
let newTask2;
let liText2;
let rmText2;
let doneText;
let undoText;

tskBtn2.addEventListener("click", function AddItem2() {
    //Same as before
    newTask2 = tskInput2.value;

    if (newTask2 == "") {
        alert("Please enter a task first!");
        return;
    }

    const li = document.createElement("li");
    liText2 = document.createTextNode(newTask + " ");
    li.appendChild(liText2);

    const rmBtn2 = document.createElement("Button");
    rmText2 = document.createTextNode("Remove Task");
    rmBtn2.appendChild(rmText2);
    li.appendChild(rmBtn2);

    const doneBtn = document.createElement("Button");
    doneText = document.createTextNode("Complete Task");
    doneBtn.appendChild(doneText);
    li.appendChild(doneBtn);

    tskList2.appendChild(li);

    //New
    const undoBtn = document.createElement("Button");
    undoText = document.createTextNode("Undo Completion")
    undoBtn.appendChild(undoText);

    doneBtn.addEventListener("click", function Strikeout() {
        li.style.textDecoration = "line-through";
        li.removeChild(doneBtn);
        li.appendChild(undoBtn);
    })

    undoBtn.addEventListener("click", function unStrike() {
        li.style.textDecoration = "none";
        li.removeChild(undoBtn);
        li.appendChild(doneBtn);
    })

    rmBtn2.addEventListener("click", function removeTask() {
        tskList2.removeChild(li);
    })

    tskInput2.value = "";

})
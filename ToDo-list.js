/* declare variables */
var node;
var item; 
var toDoList = document.getElementById("to-do-list");
var done;

function submitItem() {
    /* add submitted task string to new node for new list item */
    node = document.createElement("li");
    item = document.getElementById("newItem").value;
    node.innerHTML = item;

    addDeleteButton();

    addDoneButton();

    /* append new item to ul */
    toDoList.appendChild(node);

    clearTextField();
}

/* allow return key to submit the form & clear the text field */
function returnKeySubmit(e) {
    if(e && e.keyCode ==== 13) {
       addItem();
    }
    clearTextField(); 
 }

/* clear form field */
function clearTextField() {
    document.getElementById('newItem').value = '';
}

 /* append delete button to new list item */
 function addDeleteButton() {
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    node.appendChild(deleteButton);
 }

 /* append done button to new list item */
 function addDoneButton() {
    var doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("onclick", "doneItem(this)");
    node.appendChild(doneButton);
}
 
/* add function for 'Clear List' button (in HTML) */
function clearList() {
        document.getElementById("to-do-list").innerHTML = '';
}

/* add function for 'x' button (created in JS) */
function deleteItem(item) {
    item.parentNode.remove();   
}

/* add function for 'Done' button (created in JS) */
function doneItem(this) {
    this.parentNode.remove();

    node = document.createElement("li");
    node.innerHTML = this;
    doneList = document.getElementById("done-list");
    doneList.appendChild(node);
}

/* send done item to 'Done' list below ToDo list, + append a 'restore' button styled as a ticked box logo */



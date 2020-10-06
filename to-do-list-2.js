
/* Check user input from form. If valid, create new list item from it */
function submitItem() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("text-box").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You need to write a task!");
    } else {
        document.getElementById("to-do-list").appendChild(li);
        addDeleteButton(li);
        addDoneButton(li);
    }
    /* clearing textbox after submitting input */
    document.getElementById("text-box").value = '';
    }

function clearList() {
    document.getElementById("to-do-list").innerHTML = '';
}

function addDeleteButton(li) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    li.appendChild(deleteButton);
} 

function addDoneButton(li) {
    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("onclick", "doneItem(this)");
    li.appendChild(doneButton);
} 

function deleteItem(btn) {
    btn.parentNode.remove();
}

function doneItem(btn) {
    btn.parentNode.style = "text-decoration:line-through; list-style-type:none";
    btn.innerHTML = "Restore";
    btn.setAttribute("onclick", "restoreItem(this)");
}

function restoreItem(btn) {
    btn.parentNode.style = "list-style-type:none";
    btn.innerHTML = "Done";
    btn.setAttribute("onclick", "doneItem(this)");
}


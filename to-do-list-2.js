


/* Add new input from textbox to the list + append buttons to new item */
function submitItem() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("text-box").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    /* Check user input from form. If valid, create new list item from input */
    if (inputValue === '') {
        alert("You need to write a task!");
    } else {
        document.getElementById("to-do-list").appendChild(li);
        addDeleteButton(li);
        addDoneButton(li);
    }
    /* clears textbox after submitting input */
    document.getElementById("text-box").value = '';
    }

/* clear textbox after submitting input */
function clearList() {
    document.getElementById("to-do-list").innerHTML = '';
}

/* create + append Delete Button to each new list item */
function addDeleteButton(li) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.setAttribute("onclick", "deleteItem(this)");
    li.appendChild(deleteButton);
} 

/*create + append Done Button to each new list item */
function addDoneButton(li) {
    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";
    doneButton.setAttribute("onclick", "doneItem(this)");
    li.appendChild(doneButton);
} 

/* Delete Button functionality for individual list items */
function deleteItem(btn) {
    btn.parentNode.remove();
}

/* Done Button adds strikethrough styling for list item; changes Done into Restore Button & links to that function in JS */
function doneItem(btn) {
    btn.parentNode.style = "text-decoration:line-through; list-style-type:none";
    btn.innerHTML = "Restore";
    btn.setAttribute("onclick", "restoreItem(this)");
}

/* restores list item to normal styling; changes button back to Done */
function restoreItem(btn) {
    btn.parentNode.style = "list-style-type:none";
    btn.innerHTML = "Done";
    btn.setAttribute("onclick", "doneItem(this)");
}
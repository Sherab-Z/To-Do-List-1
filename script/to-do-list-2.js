
/* Create a new task item from the text-box input, append buttons to the task item, add that to the list, and clear the text-box */
function addTask() {
    const template = document.getElementById('task-template');
    const taskClone = template.contentEditable.cloneNode(true);
    const task = taskClone.querySelector('.task');
    const textElement = taskClone.querySelector('.text');
    
    const textInput = document.getElementById('text-box').value;
    const t = document.createTextNode(textInput);
    textElement.appendChild(t);
    /* Check user input from form. If valid, create new list item from input. */
    if (textInput === '') {
        alert('You need to write a task!');
    } else {
        document.getElementById('tasks').appendChild(taskClone);
    }
    /* clears textbox after submitting input */
    document.getElementById('text-box').value = '';
    }

/* delete all tasks on task-list */
function clearList() {
    let list = document.getElementById('tasks');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

// /* create + append Delete Button to each new list item */
// function addDeleteButton(task) {
//     const deleteButton = document.createElement('button');
//     deleteButton.innerHTML = 'x';
//     deleteButton.setAttribute('onclick', 'deleteTask(this)');
//     task.appendChild(deleteButton);
// } 

// /*create + append Done Button to each new list item */
// function addDoneButton(task) {
//     const doneButton = document.createElement('button');
//     doneButton.innerHTML = 'Done';
//     doneButton.setAttribute('onclick', 'doneTask(this)');
//     task.appendChild(doneButton);
// } 

/* Deletes an individual list item */
function deleteTask(btn) {
    btn.parentNode.remove();
}

/* Done Button adds strikethrough styling for list item; changes Done into Restore Button & links to that function in JS */
function doneTask(btn) {
    btn.parentNode.style = 'text-decoration:line-through; list-style-type:none';
    btn.innerHTML = 'Restore';
    btn.setAttribute('onclick', 'restoreTask(this)');
}

/* restores list item to normal styling; changes button back to Done */
function restoreTask(btn) {
    btn.parentNode.style = 'list-style-type:none';
    btn.innerHTML = 'Done';
    btn.setAttribute('onclick', 'doneTask(this)');
}

/* Create a new task item from the text-box input, append buttons to the task item, add that to the list, and clear the text-box */
function addTask() { 
    const template = document.getElementById('task-template');
    const taskClone = template.content.cloneNode(true);
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

/* Deletes an individual list item */
function deleteTask(btn) {
    btn.parentNode.parentNode.remove();
}

/* Done Button adds strikethrough styling for list item; changes Done into Restore Button & links to that function in JS */
function doneTask(btn) {
    let taskText = btn.parentNode.previousElementSibling;
    taskText.style = 'text-decoration:line-through; list-style-type:none';
    btn.innerHTML = 'restore';
    btn.setAttribute('onclick', 'restoreTask(this)');
}

/* restores list item to normal styling; changes button back to Done */
function restoreTask(btn) {
    let taskText = btn.parentNode.previousElementSibling;
    taskText.style = 'text-decoration: none; list-style-type:none';
    btn.innerHTML = 'done';
    btn.setAttribute('onclick', 'doneTask(this)');
}
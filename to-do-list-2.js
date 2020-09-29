/* check user input from form. If valid, create new list item from it */
function submitItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newItem").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You need to write a task!");
    } else {
        document.getElementById("to-do-list").appendChild(li);
    }
    document.getElementById("newItem").value = '';
    }

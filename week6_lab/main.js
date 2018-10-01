function addNewList() {
    alert('hello world!');
}

function addListItem() {
    var list = document.getElementById("grocery-list");
    var itemInput = document.getElementById("new-list-item");
    var newItem = document.createElement("li");
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

function deleteListItem(item) {
        // remove li element (item) from ol element (item.parentNode)
        item.parentNode.removeChild(item);
}

function completeListItem(item) {
    if (item.checked) { // true if the input checkbox is checked
        item.parentNode.style.textDecoration = "line-through";
        // in css, this would be: "text-decoration: line-through"
    } else {
        item.parentNode.style.textDecoration = "none";
        // in css, this would be: "text-decoration: none"
    }
}

function editListItem(item) {
    var listItem = item;
    var newInputBox = document.createElement("input");
    listItem.appendChild(newInputBox);
    // listItem.getElementsByClassName("listText").innerHMTL = newInputBox.value;
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Done";
    submitButton.className = "doneButton";
    listItem.appendChild(submitButton);
    // call the function when you click the done button
    submitButton.addEventListener("click", function() {doneButtonClicked(submitButton)});
}

function doneButtonClicked(submitButton) {
    inputBox = submitButton.previousSibling;
    var listItem = submitButton.parentNode;
    // make sure you are getting a single element of the array
    var listItemName = listItem.getElementsByTagName("span")[0];
    listItemName.innerHTML = inputBox.value;
    // hide the input box after changes are made
    inputBox.style.display = "none";
    submitButton.style.display = "none";
}

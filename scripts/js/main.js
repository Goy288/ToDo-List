var ToDoItem = (function () {
    function ToDoItem() {
    }
    ToDoItem.prototype.ToDoItem = function (title, description, startDate, endDate, priority) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
    };
    return ToDoItem;
}());
var testItem = new ToDoItem();
window.onload = function () {
};
function clearForm() {
    var textElements = document.querySelectorAll("input[type=text], textarea");
    textElements.forEach(function (textElement) {
        textElement.value = "";
    });
}
function notifyUser() {
    alert("Your item was saved");
}
function processNewItem() {
    var item = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
    displayToDo(item);
}
function displayToDo(item) {
    var todoList = document.getElementById("todo-list");
    var itemParagraph = document.createElement("p");
    itemParagraph.innerText = item.title + " : " + item.description;
    itemParagraph.onclick = toggleItemComplete;
    todoList.appendChild(itemParagraph);
}
function toggleItemComplete() {
    var currItem = this;
    currItem.classList.toggle("completed");
    var title = currItem.innerText;
    var desc = currItem.getAttribute("data-desc");
    alert("You completed " + title + ":" + desc);
}
function getItemFromForm() {
    var item = new ToDoItem();
    item.title = document.getElementById("title").value;
    item.description = document.getElementById("description").value;
    var itemStartDate = document.getElementById("start-date").value
        + "T" + document.getElementById("start-time").value + ":00.000Z";
    item.startDate = new Date(itemStartDate);
    var itemEndDate = document.getElementById("end-date").value
        + "T" + document.getElementById("end-time").value + ":00.000Z";
    item.endDate = new Date(itemEndDate);
    var priorityElem = document.getElementById("priority");
    item.priority =
        priorityElem.options[priorityElem.selectedIndex].value;
    return item;
}
function saveItem(item) {
    var data = JSON.stringify(item);
    console.log("Converting todoitem into JSON string");
    console.log(data);
    if (typeof (Storage) != "undefined") {
        localStorage.setItem("todo", item.title);
    }
}

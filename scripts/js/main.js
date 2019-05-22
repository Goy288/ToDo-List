var ToDoItem = (function () {
    class ToDoItem {
        constructor() {
        }
        ToDoItem(title, description, startDate, endDate, priority) {
            this.title = title;
            this.description = description;
            this.startDate = startDate;
            this.endDate = endDate;
            this.priority = priority;
        }
    }
    return ToDoItem;
}());

var today = new Date();

var testItem = new ToDoItem();

var count;

if (localStorage.getItem("count") == null){
    count = 0;
}
else{
    count = Number(localStorage.getItem("count"));
}

var calendars;
var clocks;

window.onload = function() {
    let addBtn = document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
    calendars = flatpickr(".calendar", {
        inline: true,
    });
    
    clocks = flatpickr(".clock", {
        inline: true,
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K"
    });

    if (JSON.parse(localStorage.getItem("toDoItems")) != null){
        let jsonData = JSON.parse(localStorage.getItem("toDoItems"));
        console.log(jsonData);
        //let toDoData = new Array(Object.keys(jsonData.toDoItems).length - 1);
        
        for (let toDoObj in jsonData) { 
            console.log(toDoObj);
            let currObj = jsonData[toDoObj]
            let item = new ToDoItem();
            item.title = currObj.title;
            item.description = currObj.description;
            item.startDate = currObj.startDate;
            item.endDate = currObj.endDate;
            item.priority = Number(currObj.priority);
            displayToDo(item);
        }
        /*
        for (let i = 0; i < count; i++) { 
            let toDoObj = jsonData.toDoItems[i];
            console.log(toDoObj);
            let item = new ToDoItem();
            item.title = toDoObj.title;
            item.description = toDoObj.description;
            item.startDate = toDoObj.startDate;
            item.endDate = toDoObj.endDate;
            item.priority = Number(toDoObj.priority);
            displayToDo(item);
        }
        */
    }
    
    setInputs();
};

var currDate = today.getFullYear()
         +'-'+(today.getMonth()+1).toString().padStart(2, '0')
         +'-'+ today.getDate().toString().padStart(2, '0');

var currTime = today.toLocaleString('en-US', { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true
});

function setInputs(){
    document.getElementById("start-date").value = currDate;
    document.getElementById("end-date").value = currDate;
    document.getElementById("start-time").value = currTime;
    document.getElementById("end-time").value = currTime;
}

function clearForm() {
    // I know there's easier method for doing this, but I'm just doing this for practice. 
    let textElements = document.querySelectorAll("input[type=text], textarea");
    textElements.forEach(function (textElement) {
        textElement.value = "";
    });
}

function notifyUser() {
    alert("Your item was saved");
}

function processNewItem() {
    let item = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
    displayToDo(item);
    calendars.forEach(calendar => {
        calendar.clear();
    });
    calendars.forEach(clock => {
        clock.clear();
    });
    currTime = today.toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true
    });
    setInputs();
}

function displayToDo(item) {
    let todoList = document.getElementById("todo-list");
    let itemParagraph = document.createElement("p");
    itemParagraph.innerText = item.title + " : " + item.description;
    itemParagraph.onclick = toggleItemComplete;
    todoList.appendChild(itemParagraph);
}

function toggleItemComplete() {
    let currItem = this;
    currItem.classList.toggle("completed");
    let title = currItem.innerText;
    let desc = currItem.getAttribute("data-desc");
    alert("You completed " + title + ":" + desc);
}

function getItemFromForm() {
    let item = new ToDoItem();
    item.title = document.getElementById("title").value;
    item.description = document.getElementById("description").value;
    let itemStartDate = document.getElementById("start-date").value
                + "T" + twelveToTwentyFour(document.getElementById("start-time").value) + ":00.000Z";
    item.startDate = new Date(itemStartDate);
    let itemEndDate = document.getElementById("end-date").value
              + "T" + twelveToTwentyFour(document.getElementById("end-time").value) + ":00.000Z";
    item.endDate = new Date(itemEndDate);
    let priorityElem = document.getElementById("priority");
    item.priority =
        priorityElem.options[priorityElem.selectedIndex].value;
    return item;
}

function twelveToTwentyFour(time12) {
    let colonIndex = time12.indexOf(":");
    let time24 = "";
    if(time12.substring(colonIndex + 4,colonIndex + 6) == "AM"){
        time24 += time12.substring(0, colonIndex);
    }
    else{
        time24 += Number(time12.substring(0, colonIndex)) + 12;
    }
    time24 += time12.substring(colonIndex, colonIndex + 3);
    if (time24.length != 5){
        time24 = "0" + time24; 
    }
    return time24;
}

function saveItem(item) {
    let data = JSON.stringify(item);
    console.log("Converting ToDoItem into JSON string");
    console.log(data);
    if(JSON.parse(localStorage.getItem('toDoItems')) != undefined){
        let toDoCookies = localStorage.getItem('toDoItems');
        let newJSON = toDoCookies.substr(0, toDoCookies.length - 1)
                    + ", \"item_" + count + "\":" + data + "}";
        localStorage.setItem("toDoItems", newJSON);
    }
    else{
        localStorage.setItem("toDoItems", "{\"item_" + count + "\":" + data + "}");
    }
    //Cookies.set("toDoItems", "item_" + count + ":" + {JSON.parse(data)});
    console.log("Storing JSON String as toDoItems.item_" + count);
    count += 1;
    localStorage.setItem("count", count);
    //Cookies.set("count", (count).toString())
}

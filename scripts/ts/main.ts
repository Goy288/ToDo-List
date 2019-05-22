//import * as Cookies from "js-cookie";

class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    priority:string;
    public ToDoItem(title:string, description:string, startDate:Date, 
                    endDate:Date, priority:string) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.priority = priority;
    }
}

window.onload = function () {
    /*
    let addBtn = <HTMLElement>
        document.querySelector("#create-item > button");
    addBtn.onclick = processNewItem;
    */
}

function clearForm() {
    // I know there's easier method for doing this, but I'm just doing this for practice. 
    let textElements = 
        document.querySelectorAll("input[type=text], textarea");
    textElements.forEach(textElement => {
        (<HTMLInputElement>textElement).value = "";
    });
}

function notifyUser() {
    alert("Your item was saved");
}

function processNewItem(){
    let item:ToDoItem = getItemFromForm();
    saveItem(item);
    notifyUser();
    clearForm();
    displayToDo(item);
}
function displayToDo(item:ToDoItem){
    let todoList = 
        document.getElementById("todo-list");
    let itemParagraph = document.createElement("p");
    itemParagraph.innerText = item.title + " : " + item.description;
    itemParagraph.onclick = toggleItemComplete;

    todoList.appendChild(itemParagraph);
}

function toggleItemComplete() {
    let currItem:HTMLElement = this;
    currItem.classList.toggle("completed");
    let title = currItem.innerText;
    let desc = currItem.getAttribute("data-desc");
    alert("You completed " + title + ":" + desc);
}

function getItemFromForm():ToDoItem {
    let item = new ToDoItem();

    item.title = (<HTMLInputElement>
        document.getElementById("title")).value;
    
    item.description = (<HTMLInputElement>
        document.getElementById("description")).value;
    
    let itemStartDate:string = (<HTMLInputElement>
        document.getElementById("start-date")).value
      + "T" + (<HTMLInputElement>
                document.getElementById("start-time")).value + ":00.000Z";
    
    item.startDate = new Date(itemStartDate);

    let itemEndDate:string = (<HTMLInputElement>
        document.getElementById("end-date")).value     
      + "T" + (<HTMLInputElement>
                document.getElementById("end-time")).value + ":00.000Z";
    
    item.endDate = new Date(itemEndDate);

    let priorityElem = <HTMLSelectElement>
        document.getElementById("priority");
    item.priority =
        priorityElem.options[priorityElem.selectedIndex].value;

    return item;
}
function saveItem(item:ToDoItem):void{
    let data:string = JSON.stringify(item);
    console.log("Converting ToDoItem into JSON string");
    console.log(data);
    /*
    */

    /*
    if(typeof(Storage) != "undefined"){
        localStorage.setItem("todo", item.title);
    }
    */
}
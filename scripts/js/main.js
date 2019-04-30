var ToDoItem = (function () {
    function ToDoItem() {
    }
    ToDoItem.prototype.ToDoItem = function (title, description, startDate, endDate, urgency) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isComplete = false;
        this.urgency = urgency;
    };
    return ToDoItem;
}());
var testItem = new ToDoItem();
if (testItem.isComplete) {
}

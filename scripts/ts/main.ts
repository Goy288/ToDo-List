class ToDoItem{
    title:string;
    description:string;
    startDate:Date;
    endDate:Date;
    isComplete:boolean;
    urgency:string;
    public ToDoItem(title:string, description:string, startDate:Date, 
                    endDate:Date, urgency:string) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isComplete = false;
        this.urgency = urgency;
    }
}

let testItem = new ToDoItem();
if(testItem.isComplete){

}
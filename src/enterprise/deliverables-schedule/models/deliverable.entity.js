export class DeliverableEntity{
    constructor(id, title, description, deadLineDate,deadLineHour, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadLineDate = new Date(deadLineDate);
        this.deadLineHour=new Date(deadLineHour);
        this.status = status;
    }
}
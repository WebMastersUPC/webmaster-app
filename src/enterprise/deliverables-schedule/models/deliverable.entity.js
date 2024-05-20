export class DeliverableEntity{
    constructor(id, title, description, deadLine, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadLine = new Date(deadLine);
        this.status = status;
    }
}
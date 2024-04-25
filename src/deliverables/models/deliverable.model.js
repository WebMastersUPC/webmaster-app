export class DeliverableEntity{
    name;
    description;
    dueDate;
    deliveryDate;
    status;
    number;
    files = [];

    constructor(deliverableName, deliverableDescription, deliverableDueDate, deliverableDeliveryDate, deliverableStatus, deliverableNumber, deliverableFiles) {
        this.name = deliverableName;
        this.description = deliverableDescription;
        this.dueDate = deliverableDueDate;
        this.deliveryDate = deliverableDeliveryDate;
        this.status = deliverableStatus;
        this.number = deliverableNumber;
        this.files = deliverableFiles;
    }
}
export class DeliverableEntity{
    deliverable_id;
    title;
    description;
    developerDescription;
    state;
    file;
    deadlineDateValue;
    deadlineTime;
    orderNumber;
    projectID;
    developer_id;

    constructor(deliverable_id, title, description, developerDescription, state, file, deadlineDateValue, deadlineTime, orderNumber, projectID, developer_id) {
        this.deliverable_id = deliverable_id;
        this.title = title;
        this.description = description;
        this.developerDescription = developerDescription;
        this.state = state;
        this.file = file;
        this.deadlineDateValue = deadlineDateValue;
        this.deadlineTime = deadlineTime;
        this.orderNumber = orderNumber;
        this.projectID = projectID;
        this.developer_id = developer_id;
    }
}
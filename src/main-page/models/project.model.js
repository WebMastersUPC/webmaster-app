export class ProjectEntity{
    name;
    type;
    description;
    applicantsN;
    progress;
    started;
    applicants = [];
    constructor(name, type, description, applicantsN, progress, started, applicants){
        this.name = name;
        this.type = type;
        this.description = description;
        this.applicantsN = applicantsN;
        this.progress = progress;
        this.started = started;
        this.applicants = applicants;
    }
}
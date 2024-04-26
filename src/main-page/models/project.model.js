export class ProjectEntity{
    name;
    type;
    description;
    applicantsN;
    progress;
    constructor(name, type, description, applicantsN, progress){
        this.name = name;
        this.type = type;
        this.description = description;
        this.applicantsN = applicantsN;
        this.progress = progress;
    }
}
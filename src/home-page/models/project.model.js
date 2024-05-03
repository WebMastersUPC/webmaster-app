export class ProjectEntity{
    name;
    type;
    description;
    progress;
    started;
    candidates = [];
    constructor(name, type, description, progress, started, applicants){
        this.name = name;
        this.type = type;
        this.description = description;
        this.progress = progress;
        this.started = started;
        this.candidates = applicants;
    }
}
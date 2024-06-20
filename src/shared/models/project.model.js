export class ProjectEntity{
    nameProject;
    type;
    descriptionProject;
    languages = [];
    frameworks = [];
    budget;
    methodologies = [];
    enterprise_id;
    applicants_id = [];
    developer_id;
    progress;
    started;
    constructor(name, type, description, languages, frameworks, budget, methodologies, enterprise_id,
                applicants, developer_id, progress, started,){
        this.nameProject = name;
        this.type = type;
        this.descriptionProject = description;
        this.languages = languages;
        this.frameworks = frameworks;
        this.budget = budget;
        this.methodologies = methodologies;
        this.enterprise_id = enterprise_id;
        this.applicants_id = applicants;
        this.developer_id = developer_id;
        this.progress = progress;
        this.started = started;
    }
}
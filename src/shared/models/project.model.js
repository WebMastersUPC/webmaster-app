export class ProjectEntity {
    constructor({
                    project_ID,
                    nameProject,
                    type = '',
                    descriptionProject,
                    languages = [],
                    frameworks = [],
                    budget = 0,
                    methodologies = [],
                    enterprise_id,
                    applicants_id = [],
                    developer_id = null,
                    progress = 0,
                    started = false
                } = {}) {
        this.project_ID = project_ID;
        this.nameProject = nameProject;
        this.type = type;
        this.descriptionProject = descriptionProject;
        this.languages = languages;
        this.frameworks = frameworks;
        this.budget = budget;
        this.methodologies = methodologies;
        this.enterprise_id = enterprise_id;
        this.applicants_id = applicants_id;
        this.developer_id = developer_id;
        this.progress = progress;
        this.started = started;
    }
}
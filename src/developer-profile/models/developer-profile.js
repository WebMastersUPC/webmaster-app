export class DeveloperProfileEntity{
    id;
    name;
    description;
    rating;
    profileImage;
    country;
    cellphone;
    email;
    completedProjects;
    skills;
    repository= [];

    constructor(id, name, description, rating, profileImage, country, cellphone, email, completedProjects, skills, repository) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.profileImage = profileImage;
        this.country = country;
        this.cellphone = cellphone;
        this.email = email;
        this.completedProjects = completedProjects;
        this.skills = skills;
        this.repository = repository;
    }

}
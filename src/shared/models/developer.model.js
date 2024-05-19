export class DeveloperEntity{
    id;
    name;
    profileImage;
    rating;
    description;
    country;
    cellphone;
    email;
    completedProjects;
    skills;
    projects= [];
    constructor(id,name, profileImage, rating,
                description,
                country,
                cellphone,
                email,
                completedProjects,
                skills,
                projects= []){
        this.id=id;
        this.name = name;
        this.profileImage = profileImage;
        this.rating = rating;
        this.description = description;
        this.country = country;
        this.cellphone = cellphone;
        this.email = email;
        this.completedProjects = completedProjects;
        this.skills = skills;
        this.projects = projects;
    }
}
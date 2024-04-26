export class DeveloperEntity{
    name;
    rating;
    description;
    country;
    phone;
    email;
    projectsFinished;
    specialties;
    projects= [];
    constructor(name, rating,
                description,
                country,
                phone,
                email,
                projectsFinished,
                specialties,
                projects= []){
        this.name = name;
        this.rating = rating;
        this.description = description;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.projectsFinished = projectsFinished;
        this.specialties = specialties;
        this.projects = projects;
    }
}
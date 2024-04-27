export class DeveloperEntity{
    name;
    img;
    rating;
    description;
    country;
    phone;
    email;
    projectsFinished;
    specialties;
    projects= [];
    constructor(name, img, rating,
                description,
                country,
                phone,
                email,
                projectsFinished,
                specialties,
                projects= []){
        this.name = name;
        this.img = img;
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
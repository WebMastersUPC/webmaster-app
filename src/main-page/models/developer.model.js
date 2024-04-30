export class DeveloperEntity{
    id;
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
    constructor(id,name, img, rating,
                description,
                country,
                phone,
                email,
                projectsFinished,
                specialties,
                projects= []){
        this.id=id;
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
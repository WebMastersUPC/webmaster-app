export class CompanyEntity{
    name;
    description;
    country;
    RUC;
    phone;
    email;
    webpage;
    sector;
    projects= [];
    constructor(name, description, country, RUC, phone, email, webpage, sector, projects= []){
        this.name = name;
        this.description = description;
        this.country = country;
        this.RUC = RUC;
        this.phone=phone;
        this.email = email;
        this.webpage = webpage;
        this.sector = sector;
        this.projects = projects;

    }
}
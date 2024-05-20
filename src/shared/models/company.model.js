export class CompanyEntity{
    name;
    img;
    description;
    country;
    RUC;
    phone;
    email;
    webpage;
    sector;
    projects= [];
    deliverables=[];
    constructor(name, img, description, country, RUC, phone, email, webpage, sector, projects= [],deliverables=[]){
        this.name = name;
        this.img = img;
        this.description = description;
        this.country = country;
        this.RUC = RUC;
        this.phone=phone;
        this.email = email;
        this.webpage = webpage;
        this.sector = sector;
        this.projects = projects;
        this.deliverables=deliverables;

    };
}
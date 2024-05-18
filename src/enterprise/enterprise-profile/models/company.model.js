export class CompanyEntity{
    username;
    imageProfile;
    summary;
    country;
    socialRazon;
    cellphone;
    email;
    website;
    sector;
    projects= [];
    constructor(username, imageProfile, summary, country, socialRazon, cellphone, email, website, sector, projects= []){
        this.username = username;
        this.imageProfile = imageProfile;
        this.summary = summary;
        this.country = country;
        this.socialRazon = socialRazon;
        this.cellphone=cellphone;
        this.email = email;
        this.website = website;
        this.sector = sector;
        this.projects = projects;

    };
}
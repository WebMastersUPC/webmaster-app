export class CompanyEntity{
    id
    enterprise_name;
    profile_img_url;
    description;
    country;
    RUC;
    phone;
    website;
    sector;
    User;
    constructor(id, enterprise_name, profile_img_url, description, country, RUC, phone, website, sector, User=[]){
        this.id = id
        this.enterprise_name = enterprise_name;
        this.profile_img_url = profile_img_url;
        this.description = description;
        this.country = country;
        this.RUC = RUC;
        this.phone=phone;
        this.website = website;
        this.sector = sector;
        this.User = User;
    };
}
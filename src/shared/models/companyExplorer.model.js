export class CompanyExplorerEntity{
    enterprise_id;
    enterprise_name;
    profile_img_url;
    user_id;
    constructor(enterprise_id, enterprise_name, profile_img_url, user_id) {
        this.enterprise_id = enterprise_id;
        this.enterprise_name = enterprise_name;
        this.profile_img_url = profile_img_url;
        this.user_id = user_id;
    }
}
export class ApplicantEntity{
    developer_id
    firstName
    lastName
    description
    profile_img_url

    constructor(developer_id, firstName, lastName, description, profile_img_url) {
        this.developer_id = developer_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
        this.profile_img_url = profile_img_url;
    }
}
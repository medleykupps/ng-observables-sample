export class User {

    constructor(info?: any) {
        this.id = info && info.id || "";
        this.username = info && info.username || "default";
        this.firstName = info && info.firstName || "My";
        this.lastName = info && info.lastName || "User";
    }

    id: string;
    username: string;
    firstName: string;
    lastName: string;

}
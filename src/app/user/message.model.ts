import { User } from "./user.model";

export class Message {

    id: string;
    sent: Date;
    isRead: boolean;
    author: User;
    text: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || "-";
        this.sent = obj && obj.sent || new Date();
        this.isRead = obj && obj.isRead || false;
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || "-";        
    }
    
}
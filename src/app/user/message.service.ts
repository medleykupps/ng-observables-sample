import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { Message } from "./message.model";
import { User } from "./user.model";
import { IMessageOperation } from "./message-operation.model";


@Injectable()
export class MessageService {

    // Provides a stream of message lists
    public messages: Observable<Message[]>;

    // Provides a stream to publish new messages one at a time
    public newMessages: Subject<Message> = new Subject<Message>();

    // Provides a stream of updates to modify the list of messages
    public updates: Subject<any> = new Subject<any>();

    constructor() {
        this.messages = this.updates
            .scan((messages: Message[], operation: IMessageOperation) => {
                return operation(messages);
            });
    }


    // Add a new message and publish it to downstream subscribers
    public addMessage(message: Message) {
        this.newMessages.next(message);
    }

    // Provide a stream of messages published by other users
    public messagesFromOtherUsers(user: User) : Observable<Message> {
        return this.newMessages
            .filter( (message:Message) => {
                return message.author.id !== user.id;
            })
    }

}
import { Message } from "./message.model";

export interface IMessageOperation extends Function {

    (messages: Message[]): Message[];

}
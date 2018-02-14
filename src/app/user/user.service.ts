import { Subject, BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

    user : Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User) {
        this.user.next(newUser);
    }

}
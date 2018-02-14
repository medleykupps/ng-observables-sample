import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  username: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  updateUser() {
    this.userService.setCurrentUser(new User({
      username: this.username
    }));
  }

}

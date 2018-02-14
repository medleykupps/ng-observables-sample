import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.user.subscribe(x => {
      this.user = x;
    })
  }



}

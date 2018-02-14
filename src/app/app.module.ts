import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from './dashboard/view-user/view-user.component';
import { UpdateUserComponent } from './dashboard/update-user/update-user.component';
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

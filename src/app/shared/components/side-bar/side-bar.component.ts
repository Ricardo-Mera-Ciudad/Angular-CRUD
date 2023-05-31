import { Component } from '@angular/core';
import { User } from 'src/app/contacts/interfaces/user.inerface';
import { AddUsersService } from 'src/app/services/add-users.service';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(public addUsersService: AddUsersService ) {}

  public newUser: User = {
    name: 'test',
    password: 'test',
    email: 'test',
    subscription: false,
    country: 'test',
    city: 'test'
  }
}

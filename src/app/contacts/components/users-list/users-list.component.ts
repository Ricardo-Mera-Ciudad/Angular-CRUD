import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.inerface';
import { AddUsersService } from 'src/app/services/add-users.service';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  constructor(public addUsersService: AddUsersService) {}

}



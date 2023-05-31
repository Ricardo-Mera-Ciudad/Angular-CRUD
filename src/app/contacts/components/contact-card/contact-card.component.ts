import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.inerface';
import { AddUsersService } from 'src/app/services/add-users.service';
import { findIndex } from 'rxjs';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  @Input()
  public userList: User[] = [
    {
      name: '',
      password: '',
      email: '',
      subscription: false,
      country: '',
      city: '',
    },
  ];

  constructor(public addUsersService: AddUsersService) {}

  onDeleteUser(index: number) {
    console.log(index);
    this.addUsersService.users.splice(index, 1);
    
  }

}

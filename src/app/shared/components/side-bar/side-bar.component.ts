import { Component } from '@angular/core';
import { User } from 'src/app/contacts/interfaces/user.inerface';
import { AddUsersService } from 'src/app/services/add-users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  constructor(public addUsersService: AddUsersService) {}

  newUser = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    reppass: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subscription: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
  });

  userValue: User = {
    name: this.newUser.value.name,
    password: this.newUser.value.password,
    email: this.newUser.value.email,
    subscription: this.newUser.value.subscription,
    country: this.newUser.value.country,
    city: this.newUser.value.city,
  };

  logUser() {
    console.log(this.userValue);
    console.log(this.newUser.value.name);
    // console.log(this.newUser.value);
  }

  onAddUser() {
    this.userValue = {
      name: this.newUser.value.name,
      password: this.newUser.value.password,
      email: this.newUser.value.email,
      subscription: this.newUser.value.subscription,
      country: this.newUser.value.country,
      city: this.newUser.value.city,
    };

    console.log(this.userValue);
    this.addUsersService.addNewUser(this.userValue);
  }
}

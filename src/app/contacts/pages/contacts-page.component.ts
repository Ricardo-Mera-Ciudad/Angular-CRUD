import { Component, OnInit } from '@angular/core';
import { AddUsersService } from 'src/app/services/add-users.service';

@Component({
  selector: 'contacts-page',
  templateUrl: 'contacts-page.component.html',
})
export class ContactsPageComponent implements OnInit {
  
  constructor(public addUsersService: AddUsersService) {}

  ngOnInit() {}

  
}

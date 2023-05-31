import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './pages/contacts-page.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [ContactsPageComponent, ContactCardComponent, UsersListComponent],
  imports: [CommonModule],
  exports: [ContactsPageComponent]
})
export class ContactsModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactsModule } from './contacts/contacts.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, ContactsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

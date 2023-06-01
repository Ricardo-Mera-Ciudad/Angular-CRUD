import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SideBarComponent],
})
export class SharedModule {}

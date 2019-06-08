import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DoctorsOfficeComponent} from './doctors-office.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    DoctorsOfficeComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DoctorsOfficeModule { }

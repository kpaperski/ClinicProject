import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    EmployeesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeesModule { }

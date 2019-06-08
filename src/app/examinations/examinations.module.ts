import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExaminationsComponent} from './examinations.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  declarations: [
    ExaminationsComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ExaminationsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpecializationComponent} from './specialization.component';
import {FilterPipe} from './pipes/filter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SpecializationComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SpecializationModule { }

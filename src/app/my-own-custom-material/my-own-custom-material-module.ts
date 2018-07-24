import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatInputModule,
  MatButtonModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatInputModule
  ],
  declarations: []
})
export class MyOwnCustomMaterialModule { }

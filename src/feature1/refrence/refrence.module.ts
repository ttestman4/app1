import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRefrence from './refrence.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('refrence', fromRefrence.reducer),
  ],
  declarations: []
})
export class RefrenceModule { }

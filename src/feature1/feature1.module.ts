import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { RefrenceModule } from './refrence/refrence.module';
@NgModule({
  imports: [
    CommonModule,
    RefrenceModule
  ],
  declarations: [Feature1Component],
  exports: [Feature1Component]
})
export class Feature1Module { }

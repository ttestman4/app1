import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { RefrenceModule } from './refrence/refrence.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RefrenceModule,
    RouterModule.forChild([
      {
        path: 'featurecomp',
        component: Feature1Component
      },
      { path: '', redirectTo: 'featurecomp', pathMatch: 'full' }
    ])
  ],
  declarations: [Feature1Component],
  exports: [Feature1Component]
})
export class Feature1Module { }

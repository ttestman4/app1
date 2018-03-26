import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootstateComponent } from './rootstate/rootstate.component';
import { RouterModule, Routes } from '@angular/router';

export const childRoutes: Routes = [
  {
    path: 'rootwidget',
    component: RootstateComponent
  },
  { path: '', redirectTo: 'rootwidget', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  declarations: [RootstateComponent],
  exports: [RootstateComponent]
})
export class RootwidgetModule { }

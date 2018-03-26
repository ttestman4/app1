import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootstateComponent } from './rootstate/rootstate.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'rootwidget',
        component: RootstateComponent
      },
      { path: '', redirectTo: 'rootwidget', pathMatch: 'full' },
    ])
  ],
  declarations: [RootstateComponent],
  exports: [RootstateComponent]
})
export class RootwidgetModule { }

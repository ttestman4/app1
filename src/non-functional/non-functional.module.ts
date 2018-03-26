import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStateModule } from './root-state/root-state.module';
import { RootwidgetModule } from './rootwidget/rootwidget.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RootStateModule,
    RootwidgetModule,
    RouterModule.forChild([
      {
        path: 'rootstate',
        loadChildren: './rootwidget/rootwidget.module#RootwidgetModule'
      },
      { path: '', redirectTo: 'rootstate', pathMatch: 'full' },
    ])
  ],
  exports: [RootwidgetModule],
  declarations: []
})
export class NonFunctionalModule { }

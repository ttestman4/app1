import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStateModule } from './root-state/root-state.module';
import { RootwidgetModule, childRoutes } from './rootwidget/rootwidget.module';
import { RouterModule, Routes } from '@angular/router';

export const nonFunctionalRoutes: Routes = [
  {
    path: 'rootstate',
    // loadChildren: './rootwidget/rootwidget.module#RootwidgetModule'
    children: childRoutes
  },
  { path: '', redirectTo: 'rootstate', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RootStateModule,
    RootwidgetModule,
    // RouterModule.forChild(nonFunctionalRoutes),
  ],
  exports: [RootwidgetModule],
  declarations: []
})
export class NonFunctionalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStateModule } from './root-state/root-state.module';
import { RootwidgetModule } from './rootwidget/rootwidget.module';

@NgModule({
  imports: [
    CommonModule,
    RootStateModule,
    RootwidgetModule,
  ],
  exports: [RootwidgetModule],
  declarations: []
})
export class NonFunctionalModule { }

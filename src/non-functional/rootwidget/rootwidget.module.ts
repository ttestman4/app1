import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootstateComponent } from './rootstate/rootstate.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RootstateComponent],
  exports: [RootstateComponent]
})
export class RootwidgetModule { }

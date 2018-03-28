import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2proxyRoutingModule } from './feature2proxy-routing.module';
import { Lib2Module } from '@ttestman4/lib2';

@NgModule({
  imports: [
    CommonModule,
    Feature2proxyRoutingModule,
    Lib2Module
  ],
  exports: [
    Lib2Module,
  ],
  declarations: []
})
export class Feature2proxyModule { }

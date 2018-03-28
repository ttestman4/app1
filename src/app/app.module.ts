import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { Feature1Module } from '../feature1/feature1.module';
import { NonFunctionalModule } from '../non-functional/non-functional.module';
import { Lib2Module } from '@ttestman4/lib2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NonFunctionalModule,
    // Feature1Module,
    Lib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { Feature1Module } from '../feature1/feature1.module';
import { NonFunctionalModule } from '../non-functional/non-functional.module';
// import { Feature2proxyModule } from './feature2proxy/feature2proxy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NonFunctionalModule,
    // Feature1Module,
    // Lib2Module,
    // Feature2proxyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstgen/firstcomponent/firstcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { BeveragesComponent } from './beverages/beverages.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

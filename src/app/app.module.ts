import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route5Component } from './route5/route5.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { Route6Component } from './route6/route6.component';
import { Route2Component } from './route2/route2.component';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route5Component,
    HeaderComponent,
    Route6Component,
    Route2Component
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

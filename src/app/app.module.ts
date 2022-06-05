import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyListComponent} from './company-list/company-list.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

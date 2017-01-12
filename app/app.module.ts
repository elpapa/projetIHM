import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent }  from './app.component';
import { HttpModule }  from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyAPV505mtm1F6LX5_HjY4wG2GNEFlYvzTs'
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

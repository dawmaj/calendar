import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppComponent } from './app.component';
import { EventSesrvice } from './event.service';
import { HttpModule } from '@angular/http';
import { CalComponent } from './cal/cal.component';


@NgModule({
  declarations: [
    AppComponent,
    CalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpModule
  ],
  providers: [ EventSesrvice ],
  bootstrap: [AppComponent]
})
export class AppModule { }

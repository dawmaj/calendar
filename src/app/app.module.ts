import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import { AppComponent } from './app.component';
import { EventSesrvice } from './event.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [ EventSesrvice ],
  bootstrap: [AppComponent]
})
export class AppModule { }

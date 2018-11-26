import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventSesrvice } from './event.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  calendarOptions: Options;
  displayEvent: any;
  myLogin: string;
  isInstructor: boolean;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected eventService: EventSesrvice) { }

  ngOnInit() {
    this.eventService.login().subscribe(data => {
      localStorage.setItem('userToken', data.json().token);
      console.log(data.json().token);
    });

    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: false,
        eventLimit: false,
        locale:	'pl',
        buttonText: {
          today: 'Dzisiaj',
          month: 'Miesiąc',
          week: 'Tydzień',
          day: 'Dzień'
        },
        header: {
          left: 'prev,next',
					center: 'title',
					right: 'month,agendaWeek,agendaDay'
        },
        views: {
          agendaWeek: 
          {
            columnFormat: 'ddd d-M',
          }
        },
        slotLabelFormat:"HH:mm",
        allDaySlot: false,
        events: data
      };
      console.log(this.calendarOptions.editable);
    });
    this.eventService.getUserDetails(localStorage.getItem('userToken')).subscribe(data => {
      console.log(data.json().accountType);
      switch(data.json().accountType)
      {
        case 0:
          break;
        case 1:
          this.isInstructor = true;
          this.eventService.getEvents().subscribe(data => {
          this.calendarOptions = {
            editable: true,
          };
      console.log(this.calendarOptions.editable);
    });
        case 2:
          break;
      }
      console.log(this.isInstructor + " " + this.calendarOptions.editable);
    });
  }
  
  clickButton(model: any) {
    this.displayEvent = model;
  }

  addLesson(email: any ,date: any,hours: any)
  {
    this.eventService.addLesson(localStorage.getItem('userToken'),email,date,hours);
  };

  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}


import { Inject, Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { filter, map, catchError } from 'rxjs/operators';

@Injectable()
export class EventSesrvice {

    private headers = new Headers({'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private cid = 1;
    private baseUrl = "http://orlean.ski:8090";
    private loginUrl = this.baseUrl + "/api/login";
    private getLessonsUrl = this.baseUrl + '/api/school/get/lessons';
    private addLessonUrl = this.baseUrl + '/api/add/lesson';
    eventsArray: string[] = [];
    message: string;

    constructor(private http: Http) { }

    public login(): Observable<any> {
        let body = JSON.stringify({ email: "test@test.pl", password:"test"});
        console.log(body);
        let res = this.http.post(this.loginUrl,body, this.options
        ).pipe(map((response: Response) => response));
        console.log(res);
        return (res);
      }

      public addLesson(): Observable<any> {
        let body = JSON.stringify({ email: "test@test.pl", password:"test"});
        //console.log(body);
        let res = this.http.post(this.addLessonUrl,body, this.options
        ).pipe(map((response: Response) => response));
        //console.log(res);
        return of(res);
      }
      public getLesson(): Observable<any> {
        let body = JSON.stringify({ email: "test@test.pl", password:"test"});
    //console.log(this.msgArray);
            this.eventsArray = this.message.split(", ");
            
            for (var i=0 ;i < this.eventsArray.length; i++) {
            this.eventsArray[i];
            }
  
        console.log(body);
        let res = this.http.post(this.getLessonsUrl,body, this.options
        ).pipe(map((response: Response) => response));
        console.log(res);
        return of(res);
      }
    public getEvents(): Observable<any> {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any = [{
            title: 'All Day Event',
            start: yearMonth + '-01'
        },
        {
            title: 'Long Event',
            start: yearMonth + '-07',
            end: yearMonth + '-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: yearMonth + '-16T16:00:00'
        },
        {
            title: 'Conference',
            start: yearMonth + '-11',
            end: yearMonth + '-13'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T10:30:00',
            end: yearMonth + '-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: yearMonth + '-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: yearMonth + '-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: yearMonth + '-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: yearMonth + '-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: yearMonth + '-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: yearMonth + '-28'
        }];
        return of(data);
    } 
};

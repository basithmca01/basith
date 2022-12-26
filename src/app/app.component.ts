import { Component, VERSION } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  fromSub: any;

  constructor(private appService: AppServiceService) {
    appService.sub.subscribe((obj) => {
      console.log('from app sub', obj);
      this.fromSub = obj;
    });

    this.appService.behSub.subscribe((obj) => {
      console.log('from app beh', obj);
    });
  }
}

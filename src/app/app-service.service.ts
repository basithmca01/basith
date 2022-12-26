import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AppServiceService {
  sub: Subject<number>;
  behSub: BehaviorSubject<number>;
  constructor() {
    this.sub = new Subject<number>();
    this.behSub = new BehaviorSubject<number>(1000);


   }
   sendData(data: number) {
      this.sub.next(data);
  }

  sendBehaData(data: number) {
    this.behSub.next(data);
  }

}
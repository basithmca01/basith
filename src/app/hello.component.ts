import { Component, Input } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}! <button (click)="emit()">Emit </button></h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
  isSub = false;

  constructor(private appService: AppServiceService) {
    // appService.sub.subscribe((obj) => console.log('from app home', obj));
  }

  emit() {
    this.appService.sendData(Math.random());
    this.appService.sendBehaData(Math.random());
    if (!this.isSub) {
      this.isSub = true;
      this.appService.behSub.subscribe((obj) => {
        console.log('from hel beh', obj);
      });
    }
  }
}

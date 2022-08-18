import { Component } from '@angular/core';
import {
   trigger,
   style,
   animate,
   transition,
   useAnimation,
   state,
} from '@angular/animations';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   animations: [
      trigger('fade', [
         transition('void => *', [
            style({ opacity: 0 }),
            animate(2000, style({ opacity: 1 })),
         ]),
      ]),
   ],
})
export class AppComponent {
   routeActivated(activateEvent: any): void {}
}

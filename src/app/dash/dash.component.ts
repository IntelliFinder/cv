import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Card } from './card';
import { CARD_DATA_A } from './content';
import { CARD_DATA_B } from './content';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return CARD_DATA_A;
      }

      return CARD_DATA_B;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

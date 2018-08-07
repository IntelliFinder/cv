import { Component } from '@angular/core';
import { GenComponent }      from './gen/gen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  const routes: Routes = [
    { path: 'general', component: GenComponent }
  ];

}

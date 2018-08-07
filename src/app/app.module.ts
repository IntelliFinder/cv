import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpComponent } from './exp/exp.component';
import { EduComponent } from './edu/edu.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    EduComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

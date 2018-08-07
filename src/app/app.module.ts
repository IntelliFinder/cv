import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpComponent } from './exp/exp.component';
import { EduComponent } from './edu/edu.component';
import { AppRoutingModule } from './app-routing.module';
import { GenComponent } from './gen/gen.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    EduComponent,
    GenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

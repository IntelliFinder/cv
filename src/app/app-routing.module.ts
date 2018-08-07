import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenComponent }      from './gen/gen.component';
const routes: Routes = [
    { path: 'general', component: GenComponent }
  ];
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

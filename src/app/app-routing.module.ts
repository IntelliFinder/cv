import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { ItemComponent } from './item/item.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { DashComponent } from './dash/dash.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'items', component: ItemComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

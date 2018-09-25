import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes=[
  {path: 'heroes', component: HeroesComponent}, //ruta a lista de herores
  {path: 'dashboard', component: DashboardComponent}, //ruta a darsborad
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, //Pone como ruta principal el Dashboard
  {path: 'detail/:id', component: HeroDetailComponent} //carga los detalles del heroe con el *id* dado
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})

export class AppRoutingModule { }


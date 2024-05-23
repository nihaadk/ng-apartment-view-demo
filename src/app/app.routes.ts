import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'detail/:id',
    title: 'Detail',
    component: DetailComponent,
  },
];

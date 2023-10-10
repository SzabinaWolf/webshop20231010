import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TermekekComponent } from './components/termekek/termekek.component';
import { RendelesComponent } from './components/rendeles/rendeles.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'termekek', component: TermekekComponent},
  {path: 'rendeles', component: RendelesComponent},
  /* {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadNavComponent } from './components/head-nav/head-nav.component';

const routes: Routes = [
  {path:'', component:HeadNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

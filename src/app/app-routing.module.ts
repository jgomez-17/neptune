import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { BookDetailsComponent } from './BooksComponent/book-details/book-details.component';
import { BooklistComponent } from './BooksComponent/booklist/booklist.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/booklist', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'booklist', component: BooklistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { BookDetailsComponent } from './BooksComponent/book-details/book-details.component';
import { BooklistComponent } from './BooksComponent/booklist/booklist.component';

const routes: Routes = [
  { path:'', component:BooklistComponent },
  { path: 'book/:id', component: BookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

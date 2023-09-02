import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { BooklistComponent } from './BooksComponent/booklist/booklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeadNavComponent,
    BooklistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeadNavComponent } from './components/head-nav/head-nav.component';
import { BooklistComponent } from './BooksComponent/booklist/booklist.component';
import { BookDetailsComponent } from './BooksComponent/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeadNavComponent,
    BooklistComponent,
    BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

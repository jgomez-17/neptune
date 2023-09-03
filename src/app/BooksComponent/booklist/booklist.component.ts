import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit{

  books: any[] = []; 
  apiKey = 'AIzaSyBeRb2twAEE-4V6q6gpA9y1EzIZ05EexMs';

  constructor(private http: HttpClient, private router: Router) {}

  
  ngOnInit(): void {
    this.searchBooks('angukar');
  }

  searchBooks(query: string) {
    // Verificar si el query está vacío o contiene solo espacios en blanco
    if (!query.trim()) {
      this.books = [];
      return;
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${this.apiKey}`;

    this.http.get(url).subscribe((data: any) => {
      if (data.items) {
        this.books = data.items;
      } else {
        this.books = [];
      }
    }, 
    (error) => {
      console.error('Error al hacer la solicitud:', error);
    }
    );
  }
  onSearchSubmit(query: string) {
    this.searchBooks(query);
  }

  onSelectBook(bookId: string) {
    this.router.navigate(['/book', bookId]);
  }

}

import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  books: any[] = []; 
  apiKey = 'AIzaSyBeRb2twAEE-4V6q6gpA9y1EzIZ05EexMs';
  searchQuery: string = '';

  constructor(

    private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute,

    ) {}

  
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.searchQuery = queryParams ['q'] || '';
      this.searchBooks();
    })
  }

  searchBooks() {

    const defaultQuery = 'angular'; // Término de búsqueda predeterminado
    const query = this.searchQuery.trim() || defaultQuery;

    // Verificar si el query está vacío o contiene solo espacios en blanco
    if (!this.searchQuery.trim()) {
      this.books = [];
      return;
    }

    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${this.apiKey}`;

    this.http.get(url).subscribe(
      (data: any) => {
        if (data.items) {
          this.books = data.items;
        } else {
          this.books = [];
      }

      
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: query },
        queryParamsHandling: 'merge',
      });
    }, 
    (error) => {
      console.error('Error al hacer la solicitud:', error);
    }
    );
  }

  onSelectBook(bookId: string) {
    this.router.navigate(['/book', bookId], {
      queryParams: { q: this.searchQuery },
      queryParamsHandling: 'merge',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookDetails: any; // aqui almaceno los detalles del libro

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const bookId = params['id'];
      
      this.http.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).subscribe((data:any) => {
        this.bookDetails = data  // aqui asigno los detalles del libro a la propiedad bookdetails
      });
    });
  }
  
  goBack() {
    this.router.navigate(['/']); // Navega de regreso a la página de lista de libros (puedes ajustar la ruta según sea necesario)
  }

  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }
}

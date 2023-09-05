import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { trigger, state, style, transition, animate, query } from '@angular/animations';
import { Location } from '@angular/common';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  animations: [ // animaciones para el cambio de pagina 
   trigger('zoomInOut', [
     state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
     transition(':enter', [animate(300)]),
     transition(':leave', [animate(300)]), // Animación de salida
   ])
 ]
})
export class BookDetailsComponent implements OnInit {
  
  bookDetails: any; // aqui almaceno los detalles del libro

  constructor(
    
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router, 
    private sanitizer: DomSanitizer,
    private location: Location,

    ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe((queryParams) => {
      const searchQuery = queryParams ['q'] || '';
    })

      this.route.params.subscribe(params => {
        const bookId = params['id'];
        
        this.http.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`).subscribe((data:any) => {
          this.bookDetails = data  // aqui asigno los detalles del libro a la propiedad bookdetails
        });
      });

  }

  // goBack(): void {

  //   const currentUrl = this.router.url;
  //      this.router.navigateByUrl('/dummy', { skipLocationChange: true }).then(() => {
  //      this.router.navigate([currentUrl]);
  //      this.location.back();
  //    });

  // }
  
       goBack(): void {
         this.location.back();
    }

  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }
}

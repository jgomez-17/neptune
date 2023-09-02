import { Component } from '@angular/core';

export interface data {
  id: number;
  title: string;
  img: string;
}


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books: data[] = [
    {
      id: 1,
      title: 'clean code',
      img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAKwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBgQFAAEHAv/EADYQAAEDAgMFBQQLAQAAAAAAAAECAwQAEQUSIQYTMUFRFCJhgaEHcZGiMkJSU2KUo9HS0/EV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUA/8QAIREAAgICAQQDAAAAAAAAAAAAAQIAAxESBAUhMZETQUL/2gAMAwEAAhEDEQA/AOQxsLbcbUX50ZlYOid4hVx7wqiDCGCATicYG50zp010+t01qJhsXt2IRYm9SyJDyGt6v6KMygLnwF6dHvZw/IjOO4W862tl1xtxrEUBpw5cmWyRfjmPy9a2elEw02wtKBIguIFu+XGwT8TT5sxF2bkxn/8Ao49h0NSEdxKn0d4/Glad7O8Qw9xpMvEIKULlsx1FKldwOHRZuALC4vrRR7Opkh0LjOrYjF5Te7mtKQ+AlBUo5EhQucpskEkgg2sb1WnMetcKJJdw1uI2JxB40qCoqTFehOfiTJR+9LLsRSnCoLjC/SS3/KrTbHZV/ZiQ1vJDLzEhboYyqusJQqwKhawJBHnccqXaGzkmw5xGVU/GuucyZEeZbQUuwmn+JzLWsHlp3SOnqan9obe1RhrSSRa++cPK3NXDgfIULBoCp74bbU2lR+8WEj1p6h7FTGwkuhnXhZ1JvQ11qxxmByLnqTfU4iepbZ1OFskEG4U64bnrqrl/t6CqQ2hYJw1k6g955068PtV04bESVMkhkEeBFL2L7LyY4J7M5Yc92SKe3FAHYyCrqZZsEH1EszougcwplSRfQvu8+ne0qvKQSSFIAvoNanz4qmVkEWtyqvI1qRlwZ1kcOMiSYr2RV701YLjrke2VxQt0NJYNGS4pNspNGlmPMTdxxYJ1yNtm8hrKJCre+oczbOU2rOy8ArqUgmuZiW6OBI860qS4riae1yEY1Ehr6c6PsHPuXu0G0MvFMwkrQrxDaQfQUtk68fSvaJLrJUWnFJKklCiOYOhFBN+tSsw+p1V2/RzJzDcB1JKlFog2s4/qfg2aJ2eBe3aE/mD/AFVlZQQptMeCVW3lx1Eka+Rbo8aBhrroQ4662D9cugjh4IrKyq6a1YdxEWsR4MK7heFJKgJnDgS6bH9OqlZhJUUhp82PEPjX5K3WVlyKvgTamJHef//Z'
    }
  ]
}

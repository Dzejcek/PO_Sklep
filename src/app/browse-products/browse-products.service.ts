import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../objects/Product';

@Injectable({
  providedIn: 'root'
})
export class BrowseProductsService {

  constructor(private http: HttpClient) { }

  getProductsByCat(cat: string): Observable<Product[]> {
    let getURL = `http://localhost:8080/api/produkts/category/${cat}`;
    return this.http.get<Product[]>(getURL);
    
  }

  addToBasket(productId) {
    let postUrl = `http://localhost:8080/api/produkt-koszyks/addbyid/${productId}/1`;
    this.http.post(postUrl, null).subscribe();

  }
}

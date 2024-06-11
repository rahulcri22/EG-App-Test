import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../interfaces/data';
import { mockProductHttpResponse } from './product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(mockProductHttpResponse);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/category`);
  }
  getSubCategoryByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/subcategory/${catId}`);
  }
  getProductByCatId(catId: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/cat/${catId}`);
  }
  getProductById(id: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/products/${id}`);
  }

  getProductBySubId(subId: any): Observable<any> {
    console.log('hi');
    return this.http.get<any>(`${this.BASE_URL}/products/sub/${subId}`);
  }
}

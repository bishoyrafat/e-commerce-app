import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) {}

  getAllProducts(pageIndex: any, pageSize: any) {
    return this.http.get(
      this.baseUrl + `products?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );
  }
  getFilyeredBrand(brandId: number) {
    return this.http.get(this.baseUrl + 'products?' + 'brandId=' + brandId);
  }
  getFilyeredType(typeId: number) {
    return this.http.get(this.baseUrl + 'products?' + 'typeId=' + typeId);
  }
  getFilteredSearch(text: string,pageIndex: any, pageSize: any) {
    return this.http.get(this.baseUrl + `products?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${text}` );
  }

  getAllType() {
    return this.http.get(this.baseUrl + 'Products/types');
  }
  getAllBrands() {
    return this.http.get(this.baseUrl + 'Products/brands');
  }
}

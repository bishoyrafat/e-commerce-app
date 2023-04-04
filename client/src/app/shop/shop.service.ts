import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl ='https://localhost:5001/api/'
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(this.baseUrl + 'Products')
  }
  getAllType(){
    return this.http.get(this.baseUrl + 'Products/types')
  }
  getAllBrands(){
    return this.http.get(this.baseUrl + 'Products/brands')
  }
}

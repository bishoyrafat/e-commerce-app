import { Injectable } from '@angular/core';
import  {HttpClient, HttpParams} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl ='https://localhost:5001/api/'
  constructor(private http: HttpClient) { }

  getAllProducts(type?:number,brand?:number,sort?:string){
    let params = new HttpParams
    if(type){
      params.append('type',type.toString())
    }
    if(brand){
      params.append('brand',brand.toString())
    }
    if(sort){
      params.append('sort',sort.toString())
    }
    return this.http.get(this.baseUrl + 'Products',{observe:'response',params}).pipe(
      map(res => res.body)
    )
  }
  getAllType(){
    return this.http.get(this.baseUrl + 'Products/types')
  }
  getAllBrands(){
    return this.http.get(this.baseUrl + 'Products/brands')
  }
}

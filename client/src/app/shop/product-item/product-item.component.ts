import { Iproducts } from './../../shared/models/products';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
@Input() products:any
constructor(private router :Router){}
viewProduct(e:any){
  console.log(e);
this.router.navigate(['/shop/detail',e.id])
}
}

import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
constructor(private shopService:ShopService,private activatedRoute:ActivatedRoute,private breadcrumbService: BreadcrumbService){}
id:number=0
product:any
ngOnInit(): void {
  this.id = +this.activatedRoute.snapshot.params['id']
console.log(this.id);

  this.getProductsbyId()
}

getProductsbyId(){
  this.shopService.getProductsbyId(this.id).subscribe((data:any)=>{
console.log(data);
this.product = data
    this.breadcrumbService.set('@productName', data.name);

  })
}
}

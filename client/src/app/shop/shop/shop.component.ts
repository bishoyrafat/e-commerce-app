import { Component, OnInit } from '@angular/core';
import { Ipagination } from 'app/shared/models/pagination';
import { Iproducts } from 'app/shared/models/products';
import { ShopService } from '../shop.service';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})

export class ShopComponent implements OnInit {
  products: Iproducts[] = [];
  cities: City[]=[]
  selectedCity:any
  value3:any
  constructor(private shopService: ShopService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }
  ngOnInit(): void {

    this.shopService.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    });
  }
}

import { Ibrand } from './../../shared/models/brand';
import { IType } from './../../shared/models/productType';
import { Component, OnInit } from '@angular/core';
import { Ipagination } from 'app/shared/models/pagination';
import { Iproducts } from 'app/shared/models/products';
import { ShopService } from '../shop.service';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Iproducts[] = [];
  types: IType[] = [];
  brands: Ibrand[] = [];
  cities: City[] = [];
  selectedCity: any;
  value3: any;
  constructor(private shopService: ShopService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllType();
    this.getAllBrands();
  }

  getAllProducts() {
    this.shopService.getAllProducts().subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    });
  }

  getAllType() {
    this.shopService.getAllType().subscribe((data: any) => {
      this.types = data;
    });
  }

  getAllBrands() {
    this.shopService.getAllBrands().subscribe((data: any) => {
      this.brands =data;
    });
  }
}

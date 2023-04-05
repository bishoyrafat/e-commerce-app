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
  sort: any = [];
  selectedType: any;
  selectedBrand: any;
  selectedSort: any;
  searchValue: any;
  constructor(private shopService: ShopService) {
    this.sort = [
      { name: 'Alphapetical', code: 'name' },
      { name: 'Price : High to low', code: 'priceAsc' },
      { name: 'Price : low to high', code: 'priceDesc' },
    ];
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllType();
    this.getAllBrands();
  }

  getAllProducts() {
    this.shopService
      .getAllProducts(this.selectedType, this.selectedBrand, this.selectedSort)
      .subscribe((data: any) => {
        console.log(data);
        this.products = data.data;
      });
  }

  getAllType() {
    this.shopService.getAllType().subscribe((data: any) => {
      this.types = [{ id: 0, name: 'All' }, ...data];
    });
  }

  getAllBrands() {
    this.shopService.getAllBrands().subscribe((data: any) => {
      this.brands = [{ id: 0, name: 'All' }, ...data];
    });
  }

  selectType(type: any) {
    console.log(type);

    this.selectedType = type;
    this.getAllProducts();
  }
  selectBrand(brand: any) {
    console.log(brand);

    this.selectedBrand = brand;
    this.getAllProducts();
  }
  selectSort(sort: any) {
    console.log(sort);

    this.selectedSort = sort.code;
    this.getAllProducts();
  }
}

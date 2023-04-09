import { Ibrand } from './../../shared/models/brand';
import { IType } from './../../shared/models/productType';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('searchText') search!:ElementRef
  products: Iproducts[] = [];
  types: IType[] = [];
  brands: Ibrand[] = [];
  sort: any = [];
  selectedType: any;
  selectedBrand: any;
  selectedSort: any;
  searchValue: any;
  pageIndex: number = 1;
  pageSize: number = 3;
  pageTotal: number = 0;
  constructor(private shopService: ShopService) {
    this.sort = [
      { name: 'Alphapetical', code: 'name' },
      { name: 'Price : High to low', code: 'priceAsc' },
      { name: 'Price : low to high', code: 'priceDesc' },
    ];
  }
  ngOnInit(): void {
    this.getAllProducts(this.pageIndex, this.pageSize);
    this.getAllType();
    this.getAllBrands();
  }

  getAllProducts(pageIndex: number, pageSize: number) {
    this.shopService
      .getAllProducts(pageIndex, pageSize)
      .subscribe((data: any) => {
        this.products=[]
        console.log(data);
        this.pageIndex = data.pageIndex;
        this.pageSize = data.pageSize;
        this.pageTotal = data.count;
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
    this.getFilyeredType(type.id);
  }
  selectBrand(brand: any) {
    this.getFilyeredBrand(brand.id);
  }
  selectSort(sort: any) {
    console.log(sort);
  }

  getFilyeredBrand(brandId: number) {
    this.shopService.getFilyeredBrand(brandId).subscribe((i: any) => {
      this.products = i.data;
    });
  }
  getFilyeredType(typeId: number) {
    this.shopService.getFilyeredType(typeId).subscribe((i: any) => {
      this.products = i.data;
    });
  }
  getFilteredSearch(text:string){
    this.shopService.getFilteredSearch(text,this.pageIndex,this.pageSize).subscribe(()=>{
      this.getAllProducts(this.pageIndex,this.pageSize)

    })
  }
  handlePagination(e:any){
    this.pageIndex = e.page+1
    this.getAllProducts(e.page+1, e.rows);

  }
  searchedText(){
    this.getFilteredSearch(this.search.nativeElement.value)
  }
}

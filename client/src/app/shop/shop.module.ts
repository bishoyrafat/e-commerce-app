import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ProductItemComponent } from './product-item/product-item.component';
import { PaginatorModule } from 'primeng/paginator';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CardModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    PaginatorModule,
  ],
  exports: [ShopComponent],
})
export class ShopModule {}

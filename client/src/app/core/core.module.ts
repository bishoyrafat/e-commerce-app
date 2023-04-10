import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { TestErrorsComponent } from './test-errors/test-errors.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [NavBarComponent, TestErrorsComponent],
  imports: [CommonModule, MenubarModule, CardModule, ButtonModule, BadgeModule,NgxSpinnerModule,BreadcrumbModule],
  exports: [NavBarComponent],
})
export class CoreModule {}

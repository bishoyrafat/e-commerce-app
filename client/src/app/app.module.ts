import { RouterModule } from '@angular/router';
import { HandleErrorsInterceptor } from './core/interceptors/handle-errors.interceptor';
import { ShopModule } from './shop/shop.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {BreadcrumbModule} from 'xng-breadcrumb';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    ShopModule,
    ToastModule,
    BreadcrumbModule

  ],
  exports:[BreadcrumbModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:HandleErrorsInterceptor,multi:true
    },
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

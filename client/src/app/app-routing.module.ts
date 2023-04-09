import { TestErrorsComponent } from './core/test-errors/test-errors.component';
import { ShopModule } from './shop/shop.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'shop',loadChildren : ()=>import('./shop/shop.module').then(mod =>mod.ShopModule)
  },
  {
    path:'home',loadChildren : ()=>import('./home/home.module').then(mod =>mod.HomeModule)
  },
  {
    path:'errors',component:TestErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

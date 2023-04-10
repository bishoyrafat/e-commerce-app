import { TestErrorsComponent } from './core/test-errors/test-errors.component';
import { ShopModule } from './shop/shop.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'shop',loadChildren : ()=>import('./shop/shop.module').then(mod =>mod.ShopModule),data: { breadcrumb: 'shop' }
  },
  {
    path:'',loadChildren : ()=>import('./home/home.module').then(mod =>mod.HomeModule),pathMatch:'full',data: { breadcrumb: 'home' }
  },
  {
    path:'errors',component:TestErrorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
